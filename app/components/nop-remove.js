import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-remove',
  actions: {
    click: function() {
      this.sendAction();
    }
  }
});
