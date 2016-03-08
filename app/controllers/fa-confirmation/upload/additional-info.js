import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Controller.extend({
  allContactEmails: Ember.computed('model', function() {
    return {
      submissionContactEmail: this.get('model').get('submissionContact').get('email'),
    };
  }),
  _addEmailMessage(emails, contactEmail, message) {
    if(Ember.isBlank(contactEmail)) {
      emails.push(message);
    } else {
      emails.push(contactEmail);
    }
  },
  uniqueEmailMessages: Ember.computed('contacts', function() {
    let allContactEmails = this.get('allContactEmails');
    let displayEmails = [];

    if (allContactEmails) {
      this._addEmailMessage(displayEmails, allContactEmails.submissionContactEmail, "No submission contact email set");
    }

    return _.uniq(displayEmails);
  }),
  next: 'fa-confirmation.upload.review',
  back: 'fa-confirmation.upload.attachment'
});
