import Ember from 'ember';
import ConfirmationEmail from '../models/confirmation-email';

export default Ember.Component.extend({
  tagName: 'nop-confirmation-emails',
  showEmails: Ember.computed('additionalInfo.confirmationEmails.length', function() {
    const confirmationEmails = this.get('additionalInfo').get('confirmationEmails');

    return Ember.isPresent(confirmationEmails) && confirmationEmails.length > 0;
  }),
  actions: {
    addConfirmationEmail() {
      const newEmail = ConfirmationEmail.create();
      this.get('additionalInfo').get('confirmationEmails').pushObject(newEmail);
    },
    removeConfirmationEmail(email) {
      this.get('additionalInfo').get('confirmationEmails').removeObject(email);
    }
  }
});
