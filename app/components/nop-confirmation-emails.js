import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-confirmation-emails',
  actions: {
    addConfirmationEmail() {
      this.get('submission').otherConfirmationEmails.pushObject({});
    }
  }
});
