import Ember from 'ember';

export default Ember.Controller.extend({
  next: Ember.computed('model.submissionContact.sameAsLiaison', 'model.submissionContact.sameAsActivity', function() {
    const routePrefix = 'environment-plan.new';

    if (this.get('model').get('submissionContact').get('sameAsLiaison')) {
      if (this.get('model').get('submissionContact').get('sameAsActivity')) {
        return `${routePrefix}.documents`;
      }
      return `${routePrefix}.activity-contact`;
    }
    return `${routePrefix}.liaison-contact`;
  }),
  back: 'environment-plan.new.titleholder-details'
});
