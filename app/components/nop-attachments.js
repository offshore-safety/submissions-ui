import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-attachments',
  store: Ember.inject.service(),
  classNameBindings: ['hasErrors', 'readonly'],
  readonly: false,
  actions: {
    addAttachment() {
      const newAttachment = this.get('store').createRecord('document', {});
      newAttachment.save();
      this.get('attachments').pushObject(newAttachment);
    }
  }
});
