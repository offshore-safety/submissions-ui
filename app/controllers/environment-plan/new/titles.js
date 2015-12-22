import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTitle() {
      this.get('model').titles.pushObject({});
    },
    goNext() {
      this.transitionToRoute('environment-plan.new.titleholder-details');
    },
    goBack() {
      this.transitionToRoute('environment-plan.new.activity-description');
    }
  }
});
