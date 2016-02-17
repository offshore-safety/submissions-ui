import Ember from 'ember';

export default Ember.Controller.extend({
  _nextRoute() {
    const routePrefix = 'environment-plan.new';

    if (this.get('model').get('submissionContact').get('sameAsLiaison')) {
      if (this.get('model').get('submissionContact').get('sameAsActivity')) {
        return `${routePrefix}.documents`;
      }
      return `${routePrefix}.activity-contact`;
    }
    return `${routePrefix}.liaison-contact`;
  },
  actions: {
    goNext() {
      this.transitionToRoute(this._nextRoute());
    },
    goBack() {
      this.transitionToRoute('environment-plan.new.titleholder-details');
    }
  }
});
