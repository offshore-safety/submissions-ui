import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-fa-confirmation',
  readonly: false,
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
