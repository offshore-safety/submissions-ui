import Ember from 'ember';

export default Ember.Controller.extend({
  back: Ember.computed('model.submissionContact.sameAsLiaison', 'model.submissionContact.sameAsActivity', function() {
    const routePrefix = 'environment-plan.new';

    if (this.get('model').get('submissionContact').get('sameAsLiaison')) {
      if (this.get('model').get('submissionContact').get('sameAsActivity')) {
        return `${routePrefix}.submission-contact`;
      }
      return `${routePrefix}.liaison-contact`;
    }
    return `${routePrefix}.activity-contact`;
  }),
  next: 'environment-plan.new.financial-assurance'
});
