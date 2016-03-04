import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-radio',
  classNameBindings: ['selected', 'readonly'],
  selected: Ember.computed('checked', 'value', function() {
    return this.get('checked') === this.get('value');
  })
});
