import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-submission-contact',
  classNameBindings: ['visited'],
  visited: Ember.computed('contact.visited', function() {
    return this.get('contact').get('visited');
  }),
  readonly: false,
});
