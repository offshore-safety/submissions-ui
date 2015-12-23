import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goNext() {
      this.transitionToRoute('environment-plan.new.attachments');
    },
    goBack() {
      this.transitionToRoute('environment-plan.new.attach-environment-plan');
    }
  }
});
