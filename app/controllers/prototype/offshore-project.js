import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goNext() {
      this.transitionToRoute('prototype.activity-description');
    },
    goBack() {
      this.transitionToRoute('prototype.before-you-start');
    }
  }
});
