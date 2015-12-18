import Ember from 'ember';

export default Ember.Component.extend({
  fileUploader: Ember.inject.service(),
  tagName: 'nop-uploader',
  allow: '*',
  actions: {
    fileLoaded(file) {
      this.get('fileUploader').uploadFile(file);
    }
  }
});
