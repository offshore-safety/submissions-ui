import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-confirmation-email',
  actions: {
    remove() {
      console.log('remove confirmation email');
    }
  }
});
