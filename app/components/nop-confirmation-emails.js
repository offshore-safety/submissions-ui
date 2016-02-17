import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-confirmation-emails',
  _initialiseEmails: function() {
    const additionalInfo = this.get('additionalInfo');

    if (!additionalInfo.otherConfirmationEmails) {
      additionalInfo.otherConfirmationEmails = [];
    }
  }.on('init'),
  actions: {
    addConfirmationEmail() {
      this.get('additionalInfo').otherConfirmationEmails.pushObject({});
    }
  }
});
