import Ember from 'ember';
import ComponentValidation from '../mixins/component-validation';

export default Ember.Component.extend(ComponentValidation, {
  tagName: 'nop-fa-declaration',
  readonly: false,
  classNameBindings: ['hasErrors', 'readonly'],
  validator: Ember.inject.service('validations.fa-declaration'),
  inclusionSpecified: Ember.computed('declaration.includeFa', function() {
    return this.get('declaration').includeFa !== undefined;
  }),
  _initialiseFADeclaration: function() {
    const submission = this.get('submission');
    if (!submission.documents) {
      submission.documents = {};
    }

    if (!submission.documents.faDeclaration) {
      submission.documents.faDeclaration = {};
    }
  }.on('init'),
  declaration: Ember.computed('submission.documents.faDeclaration', function() {
    const submission = this.get('submission');
    return submission.documents.faDeclaration;
  }),
  trueOrFalse: [
    {label: 'Yes', value: true},
    {label: 'No', value: false}
  ],
  showSubmit: Ember.computed('declaration.alreadySubmitted', function() {
    const alreadySubmitted = this.get('declaration').alreadySubmitted;
    return Ember.isPresent(alreadySubmitted) && !alreadySubmitted;
  })
});
