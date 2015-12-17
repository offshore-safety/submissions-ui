import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-uploader',
  allow: '*',
  actions: {
    fileLoaded(file) {
      console.log(file);
    }
  }
});
