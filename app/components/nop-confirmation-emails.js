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
  uniqueEmails: Ember.computed(function() {
    var submission = this.get('submission');
    var allEmails = [
                      submission.submissionContact.email,
                      submission.liaisonContact.email,
                      submission.activityContact.email
                    ];
    return _.uniq(allEmails);
  }),
  actions: {
    addConfirmationEmail() {
      this.get('submission').otherConfirmationEmails.pushObject({});
    }
  }
});
