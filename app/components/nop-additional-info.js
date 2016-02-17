import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-additional-info',
  classNameBindings: ['visited'],
  visited: Ember.computed('additionalInfo.visited', function() {
    return this.get('additionalInfo').get('visited');
  }),
});
