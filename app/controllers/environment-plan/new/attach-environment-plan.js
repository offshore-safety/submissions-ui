import Ember from 'ember';

export default Ember.Controller.extend({
  _previousRoute() {
    const routePrefix = 'environment-plan.new';

    if (this.get('model').sameAsActivity) {
      if (this.get('model').sameAsLiaison) {
        return `${routePrefix}.submission-contact`;
      }
      return `${routePrefix}.liaison-contact`;
    }
    return `${routePrefix}.activity-contact`;
  },
  actions: {
    goNext() {
      this.transitionToRoute('environment-plan.new.fa-declaration');
    },
    goBack() {
      this.transitionToRoute(this._previousRoute());
    }
  }
});
