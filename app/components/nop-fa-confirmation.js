import Ember from 'ember';
import ComponentValidation from '../mixins/component-validation';

export default Ember.Component.extend(ComponentValidation, {
  tagName: 'nop-fa-confirmation',
  readonly: false,
  classNameBindings: ['hasErrors', 'readonly'],
  validator: Ember.inject.service('validations.fa-confirmation'),
  inclusionSpecified: Ember.computed('confirmation.includeFa', function() {
    return this.get('confirmation').includeFa !== undefined;
  }),
  _initialiseFAConfirmation: function() {
    const submission = this.get('submission');
    if (!submission.documents) {
      submission.documents = {};
    }

    if (!submission.documents.faConfirmation) {
      submission.documents.faConfirmation = {};
    }
  }.on('init'),
  confirmation: Ember.computed('submission.documents.faConfirmation', function() {
    const submission = this.get('submission');
    return submission.documents.faConfirmation;
  }),
  trueOrFalse: [
    {label: 'Yes', value: true},
    {label: 'No', value: false}
  ],
});
