import Ember from 'ember';
import ComponentValidation from '../mixins/component-validation';

export default Ember.Component.extend(ComponentValidation, {
  tagName: 'nop-submission-contact',
  validator: Ember.inject.service('validations.submission-contact'),
  readonly: false,
  _initialiseSubmissionContact: function() {
    const submission = this.get('submission');
    if (!submission.submissionContact) {
      submission.submissionContact = {};
    }
  }.on('init')
});
