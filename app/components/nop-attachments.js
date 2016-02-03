import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-attachments',
  readonly: false,
  _initialiseAttachments: function() {
    const submission = this.get('submission');
    if (!submission.documents) {
      submission.documents = {};
    }

    if (!submission.documents.attachments) {
      submission.documents.attachments = [];
    }
  }.on('init'),
  attachments: Ember.computed('submission.documents.attachments', function() {
    const submission = this.get('submission');
    return submission.documents.attachments;
  }),
  actions: {
    addAttachment() {
      this.get('attachments').pushObject({});
    }
  }
});
