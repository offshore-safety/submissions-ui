import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-titleholders',
  classNameBindings: ['hasErrors', 'readonly', 'visited'],
  readonly: false,
  visited: Ember.computed('titleholderDetails.visited', function() {
    return this.get('titleholderDetails').get('visited');
  }),
});
