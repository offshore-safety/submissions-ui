import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-textarea',
  classNameBindings: ['hint:has-hint']
});
