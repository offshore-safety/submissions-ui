import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-titles',
  classNameBindings: ['hasErrors', 'readonly'],
  readonly: false,
  actions: {
    addTitle() {
      this.sendAction('addTitle');
    }
  }
});
