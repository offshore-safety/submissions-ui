import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-titleholders',
  classNameBindings: ['hasErrors', 'readonly'],
  readonly: false,
});
