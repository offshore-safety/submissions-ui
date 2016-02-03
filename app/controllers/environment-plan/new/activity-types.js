import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goNext() {
      this.transitionToRoute('environment-plan.new.titleholder-details');
    },
    goBack() {
      this.transitionToRoute('environment-plan.new.titles');
    }
  }
});
