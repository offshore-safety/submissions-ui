import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goNext() {
      this.transitionToRoute('environment-plan.new.comments');
    },
    goBack() {
      this.transitionToRoute('environment-plan.new.fa-confirmation');
    }
  }
});
