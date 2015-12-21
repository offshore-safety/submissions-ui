import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
  fileUploader: Ember.inject.service(),
  tagName: 'nop-uploader',
  progress: 0,
  showProgress: false,
  complete: false,
  uploading: false,
  error: null,
  _fileValid(file) {
    return _.any(this.get('accept').split(','), (docType) => file.file.name.endsWith(docType));
  },
  _fileAdded(file, r) {
    this.set('complete', false);
    if (this._fileValid(file)) {
      this.set('progress', 0);
      this.set('showProgress', true);
      this.set('uploading', true);
      this.set('error', null);
      r.upload();
    } else {
      this.set('error', `${file.file.name} is not a valid file type`);
    }
  },
  _progressUpdated(file) {
    this.set('progress', file.progress()*100);
  },
  _uploadCompleted() {
    this.set('complete', true);
    this.set('uploading', false);
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
