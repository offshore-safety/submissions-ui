import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goNext() {
      this.transitionToRoute('environment-plan.new.fa-declaration');
    },
    goBack() {
      this.transitionToRoute('environment-plan.new.activity-types');
    }
  }
});
