import _ from 'lodash/lodash';
import Ember from 'ember';
import ENV from 'submissions-ui/config/environment';
import $ from 'jquery';
import Document from '../models/document';

export default Ember.Component.extend({
  tagName: 'nop-uploader',
  accept: null,
  name: null,
  defaultInstruction: 'Drop file or click here to upload',
  instruction: 'Drop file or click here to upload',
  showProgress: false,
  progress: 0,
  progressStyle: Ember.computed('progress', function() {
    return new Ember.Handlebars.SafeString(`width: ${this.get('progress')}%`);
  }),

  _fileValid(fileName) {
    const accept = this.get('accept');
    return accept === null || _.any(accept.split(','), function(docType) {
      return _.endsWith(fileName.toLowerCase(), docType);
    });
  },
  _fileAdded(file) {
    if (this._fileValid(file.name)) {
      this.set('name', file.name);
      this.set('showProgress', true);
      this.set('instruction', 'Currently uploading, please wait…');
      return true;
    } else {
      this.set('showProgress', false);
      this.set('instruction', `'${file.name}' is not a valid file type`);
      return false;
    }
  },
  _progressUpdated(file) {
    this.set('progress', file.progress() * 100);
  },
  _uploadCompleted(file, token) {
    this.set('instruction', this.get('defaultInstruction'));
    this.set('progress', 0);
    this.set('showProgress', false);

    const newDocument = Document.create();
    newDocument.set("token", token);
    newDocument.set("name", file.name);
    newDocument.set("size", file.size);
    newDocument.set("preview", file.preview ? file.preview.toDataURL('image/jpeg', 0.5) : null);
    this.sendAction('documentAdded', newDocument);
  },
  _uploadFailed(file) {
    this.set('progress', 0);
    this.set('showProgress', false);
    this.set('instruction', `Upload failed for '${file.name}'. Please check your connection and try again`);
  },
  _initialiseUploader: function() {
    const self = this;
    const uploader = this.$();
    const fileDropZone = this.$().find('.file-picker');
    const fileInput = this.$().find('input:file');
    const signatureEndpoint = `${ENV.APP.API_ENDPOINT}/api/v1/submissions/file/sign`;

    const getPresignedPostUrl = function(callback) {
      $.get(signatureEndpoint)
       .done(callback)
       .fail(function() {
        self.set('instruction', "We're having trouble preparing to upload. Please check your connection");
        setTimeout(getPresignedPostUrl, 1000, callback);
      });
    };

    function onFileUploadAdd(e, data) {
      const file = data.files[0];
      if (self._fileAdded(file)) {
        self.set('instruction', `Preparing to upload '${file.name}'...`);
        getPresignedPostUrl(function (presignedData) {
          data.url = presignedData.url;
          data.formData = presignedData.formData;
          data.submit();
          self.set('instruction', `Uploading '${file.name}'...`);
        });
      }
    }

    function onFileUploadProgressAll(e, data) {
      self._progressUpdated({progress: () => data.loaded / data.total});
    }

    function onFileUploadAddOne(e, data) {
      const token = data.response().result.getElementsByTagName('Key')[0].childNodes[0].nodeValue;
      console.log(data);
      self._uploadCompleted(data.files[0], token);
      // reset file input
      fileInput.wrap('<form>').parent('form').trigger('reset');
      fileInput.unwrap();
    }

    function onFileUploadFail(e, data) {
      self._uploadFailed(data.files[0]);
    }


    uploader.fileupload({
      fileInput:          fileInput,
      dropZone:           fileDropZone,
      type:               'POST',
      autoUpload:         false,
      paramName:          'file', // S3 does not like nested name fields i.e. name="user[avatar_url]"
      dataType:           'XML',  // S3 returns XML if success_action_status is set to 201
      replaceFileInput:   false,
      previewMinWidth:    760,
      previewMaxWidth:    760,
      previewMinHeight:   550,
      previewMaxHeight:   550,
      previewThumbnail:   false,
      disableImageResize: true})
      .on('fileuploadadd', onFileUploadAdd)
      .on('fileuploadprogressall', onFileUploadProgressAll)
      .on('fileuploaddone', onFileUploadAddOne)
      .on('fileuploadfail', onFileUploadFail);


    fileDropZone.on('click', function(e) {
      fileInput.click();
      e.preventDefault();
    });

    $(document.body).on('dragover drop', function(e) {
      e.preventDefault();
    });

    fileDropZone.on('dragenter', function() {
      fileDropZone.addClass('drag-over');
    });

    fileDropZone.on('dragleave drop', function() {
      fileDropZone.removeClass('drag-over');
    });

    this.set('instruction', this.get('defaultInstruction'));

  }.on('didInsertElement')
});
