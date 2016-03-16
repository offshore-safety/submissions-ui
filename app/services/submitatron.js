import Ember from 'ember';
import ENV from 'submissions-ui/config/environment';

export default Ember.Service.extend({
  inProgress: false,
  _submit: function(endpoint, data) {
    const self = this;
    self.set('inProgress', true);
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax(endpoint, {
        method: 'post',
        contentType: 'application/json',
        data: JSON.stringify(data)
      })
      .then((response) => {
        self.set('inProgress', false);
        resolve(response);
      }, (result) => {
        self.set('inProgress', false);
        reject(result);
      });
    });
  },
  submitEP(submission) {
    return this._submit(`${ENV.APP.API_ENDPOINT}/api/v1/submissions/environment_plans`, {environmentPlan: submission.serialize()});
  },
  submitFADeclaration(submission) {
    return this._submit(`${ENV.APP.API_ENDPOINT}/api/v1/submissions/fa_declarations`, {faDeclaration: submission.serialize()});
  },
  submitFAConfirmation(submission) {
    return this._submit(`${ENV.APP.API_ENDPOINT}/api/v1/submissions/fa_confirmations`, {faConfirmation: submission.serialize()});
  }
});
