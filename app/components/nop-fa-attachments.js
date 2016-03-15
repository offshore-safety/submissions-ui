import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-fa-attachments',
  classNameBindings: ['readonly', 'visited'],
  readonly: false,
  visited: Ember.computed('attachments.visited', function() {
    return this.get('attachments').get('visited');
  }),
  instruction: Ember.computed('type', function() {
     return `Drop ${this.get('type')} here or click to upload`;
  })
});
