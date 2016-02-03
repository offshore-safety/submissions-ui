import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-attachments',
  readonly: false,
  actions: {
    addAttachment() {
      this.get('attachments').pushObject({});
    }
  }
});
