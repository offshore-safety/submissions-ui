import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-fa-attachments',
  instruction: Ember.computed('type', function() {
     return `Drop ${this.get('type')} here or click to upload`;
  })
});
