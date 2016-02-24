import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-document',
  classNameBindings: ['hasPreview:has-preview'],
  document: null,
  canRemove: false,
  showPreview: false,
  hasPreview: Ember.computed('document.preview', function() {
    return this.get('document') && this.get('document').get('preview') && this.get('showPreview');
  }),
  actions: {
    removeDocument() {
      this.sendAction('removeDocument', this.get('document'));
    }
  }
});
