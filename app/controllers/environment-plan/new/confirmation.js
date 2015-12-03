import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['receiptNumber'],
  receiptNumber: null,
  actions: {
    goHome() {
      this.transitionToRoute('environment-plan');
    }
  }
});
