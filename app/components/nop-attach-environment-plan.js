import Ember from 'ember';
import ComponentValidation from '../mixins/component-validation';

export default Ember.Component.extend(ComponentValidation, {
  tagName: 'nop-attach-environment-plan',
  classNameBindings: ['hasErrors', 'readonly'],
  validator: Ember.inject.service('validations.environment-plan'),
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
