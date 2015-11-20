import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goNext() {
      this.transitionToRoute('prototype.person-details');
    },
    goBack() {
      this.transitionToRoute('prototype.activity-description');
    }
  }
});
