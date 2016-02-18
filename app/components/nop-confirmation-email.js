import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-confirmation-email',
  actions: {
    remove() {
      this.sendAction('removeEmail', this.get('email'));
    }
  }
});
