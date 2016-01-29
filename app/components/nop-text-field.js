import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-text-field',
  valueLines: Ember.computed('value', function() {
    return this.get('value').split('\r\n');
  })
});
