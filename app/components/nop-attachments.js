import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-attachments',
  store: Ember.inject.service(),
  classNameBindings: ['hasErrors', 'readonly'],
  label: 'Drop file or click here to upload',
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
