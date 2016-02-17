import Ember from 'ember';

export default Ember.Controller.extend({
  _previousRoute() {
    const routePrefix = 'environment-plan.new';

    if (this.get('model').get('submissionContact').get('sameAsLiaison')) {
      if (this.get('model').get('submissionContact').get('sameAsActivity')) {
        return `${routePrefix}.submission-contact`;
      }
      return `${routePrefix}.liaison-contact`;
    }
    return `${routePrefix}.activity-contact`;
  },
  actions: {
    goNext() {
      this.transitionToRoute('environment-plan.new.financial-assurance');
    },
    goBack() {
      this.transitionToRoute(this._previousRoute());
    }
  }
});
