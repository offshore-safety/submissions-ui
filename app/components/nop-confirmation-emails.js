import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
  tagName: 'nop-confirmation-emails',
  _initialiseEmails: function() {
    const submission = this.get('submission');

    if (!submission.otherConfirmationEmails) {
      submission.otherConfirmationEmails = [];
    }
  }.on('init'),
  _addEmailMessage(emails, contact, message) {
    if(_.isUndefined(contact) || _.isUndefined(contact.email)) {
      emails.push(message);
    } else {
      emails.push(contact.email);
    }
  },
  uniqueEmailMessages: Ember.computed(function() {
    var submission = this.get('submission');
    var displayEmails = [];

    this._addEmailMessage(displayEmails, submission.submissionContact, "No submission contact email set");
    this._addEmailMessage(displayEmails, submission.liaisonContact, "No liaison contact email set");
    this._addEmailMessage(displayEmails, submission.activityContact, "No activity contact email set");

    return _.uniq(displayEmails);

  }),
  actions: {
    addConfirmationEmail() {
      this.get('submission').otherConfirmationEmails.pushObject({});
    }
  }
});
