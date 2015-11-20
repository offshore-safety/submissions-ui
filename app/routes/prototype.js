import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    // TODO There HAS to be an easier way to do this....
    if (arguments[0].targetName === 'prototype.index') {
      this.transitionTo('prototype.before-you-start');
    }
  }
});
