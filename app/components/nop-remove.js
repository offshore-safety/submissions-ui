import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  enabled: true,
  classNames: ['nop-remove'],
  attributeBindings: ['disabled'],
  disabled: Ember.computed('enabled', function() { 
  	return !this.get('enabled');
  }),
  click() {
  	this.sendAction();
  }
});
