import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-fa-attachment',
  classNameBindings: ['readonly', 'visited'],
  readonly: false,
  visited: Ember.computed('attachment.visited', function() {
    return this.get('attachment').get('visited');
  }),
  instruction: Ember.computed('type', function() {
     return `Drop ${this.get('type')} here or click to upload`;
  })
});
