import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['nop-remove'],
  click() {
  	this.sendAction();
  }
});
