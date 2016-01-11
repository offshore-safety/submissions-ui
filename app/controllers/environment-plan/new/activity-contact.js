import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goNext() {
      this.transitionToRoute('environment-plan.new.activity-types');
    },
    goBack() {
      this.transitionToRoute('environment-plan.new.liaison-contact');
    }
  }
});
