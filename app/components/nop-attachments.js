import Ember from 'ember';
import Document from '../models/document';

export default Ember.Component.extend({
  tagName: 'nop-attachments',
  store: Ember.inject.service(),
  classNameBindings: ['hasErrors', 'readonly'],
  readonly: false,
  actions: {
    addAttachment() {
      const newAttachment = Document.create();
      this.get('attachments').pushObject(newAttachment);
    }
  }
});
