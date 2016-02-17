import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-liaison-contact',
  readonly: false,
  classNameBindings: ['visited'],
  visited: Ember.computed('contact.visited', function() {
    return this.get('contact').get('visited');
  }),
});
