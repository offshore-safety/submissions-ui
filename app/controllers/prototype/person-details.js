import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goNext() {
      this.transitionToRoute('styleguide');
    },
    goBack() {
      this.transitionToRoute('prototype.title-holder-details');
    }
  }
});
