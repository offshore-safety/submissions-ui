import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-environment-plan-documents',
  classNameBindings: ['visited'],
  visited: Ember.computed('documents.visited', function() {
    return this.get('documents').get('visited');
  }),
});
