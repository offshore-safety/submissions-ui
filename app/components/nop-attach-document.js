import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-attach-document',
  classNameBindings: ['errorMessage:errors'],
  document: null,
  showPreview: false,
  descriptionLabel: null,
  descriptionRequired: false,
  instruction: '',
  instructionHint: '',
  accepts: '',
  hint: '',
  errors: null,
  errorKey: null,
  errorMessage: Ember.computed('errors', 'errorKey', function() {
    if (this.get('errors') && this.get('errorKey')) {
      return this.get('errors')[this.get('errorKey')];
    }
  }),
  requiredErrorMessage: Ember.computed('errorMessage', function() {
    return this.get('errorMessage') === 'Required' ? this.get('errorMessage') : null;
  }),
  nonRequiredErrorMessage: Ember.computed('errorMessage', function() {
    return this.get('errorMessage') !== 'Required' ? this.get('errorMessage') : null;
  }),
  actions: {
    addDocument(document) {
      this.set('document', document);
    },
    removeDocument() {
      this.set('document', null);
    }
  }
});
