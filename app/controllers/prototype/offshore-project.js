import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goNext() {
      this.transitionToRoute('prototype.title-holder-details');
    },
    goBack() {
      this.transitionToRoute('prototype.before-you-start');
    }
  }
});
