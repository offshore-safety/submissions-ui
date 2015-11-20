import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goNext() {
      // TODO This is the best
      this.transitionToRoute('styleguide');
      this.transitionToRoute('prototype');
    },
    goBack() {
      this.transitionToRoute('prototype.title-holder-details');
    }
  }
});
