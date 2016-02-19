import Ember from 'ember';

export default Ember.Controller.extend({
  next: Ember.computed('model.submissionContact.sameAsActivity', function() {
    const routePrefix = 'environment-plan.new';

    if (this.get('model').get('submissionContact').get('sameAsActivity')) {
      return `${routePrefix}.documents`;
    }
    return `${routePrefix}.activity-contact`;
  }),
  back: 'environment-plan.new.submission-contact'
});
