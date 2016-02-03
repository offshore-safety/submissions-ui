import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-attach-environment-plan',
  _initialiseEnvironmentPlan: function() {
    const submission = this.get('submission');
    if (!submission.documents) {
      submission.documents = {};
    }

    if (!submission.documents.environmentPlan) {
      submission.documents.environmentPlan = {};
    }
  }.on('init'),
  environmentPlan: Ember.computed('submission.documents.environmentPlan', function() {
    const submission = this.get('submission');
    return submission.documents.environmentPlan;
  })
});
