import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-attachments',
  disabled: false,
  actions: {
    addAttachment() {
      this.get('attachments').pushObject({});
    }
  }
});
