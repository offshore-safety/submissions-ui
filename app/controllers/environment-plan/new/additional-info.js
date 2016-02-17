import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Controller.extend({
  allContactEmails: Ember.computed('model', function() {
    return {
      submissionContactEmail: this.get('model').get('submissionContact').get('email'),
      liaisonContactEmail: this.get('model').get('liaisonContact').get('email'),
      activityContactEmail: this.get('model').get('activityContact').get('email')
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
      this._addEmailMessage(displayEmails, allContactEmails.liaisonContactEmail, "No liaison contact email set");
      this._addEmailMessage(displayEmails, allContactEmails.activityContactEmail, "No activity contact email set");
    }

    return _.uniq(displayEmails);
  }),
  actions: {
    goNext() {
      this.transitionToRoute('environment-plan.new.submit');
    },
    goBack() {
      this.transitionToRoute('environment-plan.new.financial-assurance');
    }
  }
});
