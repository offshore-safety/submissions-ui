import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goNext() {
      this.transitionToRoute('environment-plan.new.liaison-contact');
    },
    goBack() {
      this.transitionToRoute('environment-plan.new.titleholder-details');
    }
  }
});
