import Ember from 'ember';
import _ from 'lodash/lodash';
import ENV from 'submissions-ui/config/environment';
import $ from 'jquery';

export default Ember.Component.extend({
  tagName: 'nop-uploader',
  classNameBindings: ['showProgress:has-progress', 'showPreview:has-preview'],
  progress: 0,
  complete: false,
  showProgress: false,
  showPreview: false,
  hasPreview: false,
  accept: null,
  token: null,
  name: null,
  disabled: true,
  instruction: 'Drop file or click here to upload',
  initMessage: 'Initialising…',
  _fileValid(fileName) {
    const accept = this.get('accept');
    return accept === null || _.any(accept.split(','), function(docType) {
      return _.endsWith(fileName.toLowerCase(), docType);
    });
  },
  _fileAdded(fileName) {
    this.set('complete', false);
    this.set('progress', 0);
    if (this._fileValid(fileName)) {
      this.set('name', fileName);
      this.set('showProgress', true);
      this.set('instruction', 'Currently uploading, please wait…');
      return true;
    } else {
      this.set('showProgress', false);
      this.set('instruction', `'${fileName}' is not a valid file type`);
      return false;
    }
  },
  _progressUpdated(file) {
    this.set('progress', file.progress()*100);
  },
  _uploadCompleted(uniqueIdentifier) {
    this.set('instruction', 'Upload Complete');
    this.set('complete', true);
    this.set('progress', 100);
    this.set('token', uniqueIdentifier);
  },
  _uploadFailed(fileName) {
    this.set('instruction', `Upload failed for '${fileName}'. Please check your connection and try again`);
  },
  _initialiseState: function() {
    if (this.get('token')) {
      this.set('instruction', 'Upload Complete');
      this.set('complete', true);
      this.set('progress', 100);
      this.set('showProgress', true);
    }
  }.on('init'),
  _initialiseUploader: function() {
    const self = this;
    const uploader = this.$();
    const filePicker = this.$().find('.file-picker');
    const fileInput = this.$().find('input:file');
    const signatureEndpoint = `${ENV.APP.API_ENDPOINT}/api/v1/submissions/file/sign`;

    const initialiseUploader = function(data) {
      uploader.fileupload({
        fileInput:          fileInput,
        dropZone:           filePicker,
        url:                data.url,
        type:               'POST',
        autoUpload:         false,
        formData:           data.formData,
        paramName:          'file', // S3 does not like nested name fields i.e. name="user[avatar_url]"
        dataType:           'XML',  // S3 returns XML if success_action_status is set to 201
        replaceFileInput:   false,
        previewMinWidth:    760,
        previewMaxWidth:    760,
        previewMinHeight:   550,
        previewMaxHeight:   550,
        previewThumbnail:   false,
        disableImageResize: true
      }).on('fileuploadadd', function(e, data) {
        self.set('showPreview', false);
        self.$('.preview-container').empty();
        if (self._fileAdded(data.files[0].name)) {
          if (self.get('hasPreview')) {
            self.set('showPreview', true);
          }
          data.submit();
        }
      }).on('fileuploadprogressall', function(e,data) {
        self._progressUpdated({progress: () => data.loaded/data.total});
      }).on('fileuploadprocessalways', function(e, data) {
        const file = data.files[0];
        if (file.preview && self.get('showPreview')) {
          self.$('.preview-container').append(data.files[0].preview);
        }
      }).on('fileuploaddone', function(e, data) {
        const uniqueIdentifier = data.response().result.getElementsByTagName('Key')[0].childNodes[0].nodeValue;
        self._uploadCompleted(uniqueIdentifier);
      }).on('fileuploadfail', function(e, data) {
        self._uploadFailed(data.files[0].name);
      });

      self.set('disabled', false);
    };

    const getPresignedPost = function() {
      $.get(signatureEndpoint).done(initialiseUploader).fail(function() {
        self.set('initMessage', "We're having trouble initialising. Please check your connection while we keep trying…");
        setTimeout(getPresignedPost, 1000);
      });
    };

    getPresignedPost();

    filePicker.on('click', function(e) {
      fileInput.click();
      e.preventDefault();
    });

    $(document).on('dragenter dragleave drop', function(e) {
      e.preventDefault();
    });

    filePicker.on('dragenter', function() {
      filePicker.addClass('drag-over');
    });

    filePicker.on('dragleave drop', function() {
      filePicker.removeClass('drag-over');
    });

  }.on('didInsertElement')
});
