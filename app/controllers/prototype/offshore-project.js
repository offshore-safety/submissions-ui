import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goNext() {
      this.transitionToRoute('prototype/titleholder-details');
    },
    goBack() {
      this.transitionToRoute('styleguide');
    }
  }
});
