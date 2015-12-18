import Ember from 'ember';

export default Ember.Component.extend({
  fileUploader: Ember.inject.service(),
  tagName: 'nop-uploader',
  progress: 0,
  showProgress: false,
  complete: false,
  uploading: false,
  _fileAdded(file) {
    this.set('progress', 0);
    this.set('showProgress', true);
    this.set('complete', false);
    this.set('uploading', true);
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

    r.on('fileAdded', function(file, event){
      self._fileAdded();
      r.upload();
    });

    r.on('fileProgress', function(file) {
      self._progressUpdated(file);
    });

    r.on('complete', function(file) {
      self._uploadCompleted();
    });
  }.on('didInsertElement')
});
