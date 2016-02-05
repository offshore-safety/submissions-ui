import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-submission-contact',
  readonly: false,
  _initialiseSubmissionContact: function() {
    const submission = this.get('submission');
    if (!submission.submissionContact) {
      submission.submissionContact = {};
    }
  }.on('init')
});