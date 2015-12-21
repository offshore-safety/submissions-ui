/*globals Resumable */
import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
  fileUploader: Ember.inject.service(),
  tagName: 'nop-uploader',
  progress: 0,
  complete: false,
  showProgress: false,
  accept: null,
  instruction: 'Drop file or click here to upload',
  _fileValid(file) {
    const accept = this.get('accept');
    return accept === null || _.any(accept.split(','), (docType) => file.file.name.endsWith(docType));
  },
  _fileAdded(file, r) {
    this.set('complete', false);
    this.set('progress', 0);
    if (this._fileValid(file)) {
      this.set('showProgress', true);
      this.set('instruction', 'Currently uploading, please wait…');
      r.upload();
    } else {
      this.set('showProgress', false);
      this.set('instruction', `'${file.file.name}' is not a valid file type`);
    }
  },
  _progressUpdated(file) {
    this.set('progress', file.progress()*100);
  },
  _uploadCompleted() {
    this.set('instruction', 'Upload Complete');
    this.set('complete', true);
    this.set('uploading', false);
    this.set('progress', 100);
  },
  _initialiseUploader: function() {
    const self = this;
    const filePicker = this.$().find('.file-picker')[0];

    const r = new Resumable({
      target:'http://nopsema-api.dev/api/v1/submissions/file',
      chunkSize: 5*1024*1024
    });

    r.assignBrowse(filePicker);
    r.assignDrop(filePicker);

    r.on('fileAdded', function(file){
      self._fileAdded(file, r);
    });

    r.on('fileProgress', function(file) {
      self._progressUpdated(file);
    });

    r.on('complete', function() {
      self._uploadCompleted();
    });
  }.on('didInsertElement')
});
