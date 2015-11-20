import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goNext() {
      this.transitionToRoute('prototype');
    },
    goBack() {
      this.transitionToRoute('prototype.title-holder-details');
    }
  }
});
