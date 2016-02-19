import Ember from 'ember';

export default Ember.Controller.extend({
  back: Ember.computed('model.submissionContact.sameAsLiaison', function() {
    const routePrefix = 'environment-plan.new';

    if (this.get('model').get('submissionContact').get('sameAsLiaison')) {
      return `${routePrefix}.submission-contact`;
    }
    return `${routePrefix}.liaison-contact`;
  }),
  next: 'environment-plan.new.documents'
});
