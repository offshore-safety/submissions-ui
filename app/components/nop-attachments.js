import Ember from 'ember';
import Document from '../models/document';

export default Ember.Component.extend({
  tagName: 'nop-attachments',
  store: Ember.inject.service(),
  classNameBindings: ['hasErrors', 'readonly'],
  readonly: false,
  actions: {
    addAttachment(attachment) {
      console.log("addAttachment");
      this.get('attachments').pushObject(attachment);
    },
    removeAttachment(attachment) {
      this.get('attachments').removeObject(attachment);
    }
  }
});
