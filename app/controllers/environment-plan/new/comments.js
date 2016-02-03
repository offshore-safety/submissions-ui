import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goNext() {
      this.transitionToRoute('environment-plan.new.confirmation-emails');
    },
    goBack() {
      this.transitionToRoute('environment-plan.new.attachments');
    }
  }
});
