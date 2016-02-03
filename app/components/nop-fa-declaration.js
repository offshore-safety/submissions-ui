import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-fa-declaration',
  readonly: false,
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
});
