import Ember from 'ember';

export default Ember.Controller.extend({
  _nextRoute() {
    const routePrefix = 'environment-plan.new';

    if (this.get('model').sameAsActivity) {
      return `${routePrefix}.attach-environment-plan`;
    }
    return `${routePrefix}.activity-contact`;
  },
  actions: {
    goNext() {
      this.transitionToRoute(this._nextRoute());
    },
    goBack() {
      this.transitionToRoute('environment-plan.new.submission-contact');
    }
  }
});
