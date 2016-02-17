import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goNext() {
      this.transitionToRoute('environment-plan.new.additional-info');
    },
    goBack() {
      this.transitionToRoute('environment-plan.new.documents');
    }
  }
});
