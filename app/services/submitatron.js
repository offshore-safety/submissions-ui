import Ember from 'ember';
import ENV from 'submissions-ui/config/environment';

export default Ember.Service.extend({
  submitEP(submission) {
    return Ember.$.ajax(`${ENV.APP.API_ENDPOINT}/api/v1/submissions/environment_plans`,
      {
        method: 'post',
        contentType: 'application/json',
        data: JSON.stringify({environmentPlan: submission.serialize()})
      }
    );
  },
  submitFADeclaration(submission) {
    return Ember.$.ajax(`${ENV.APP.API_ENDPOINT}/api/v1/submissions/fa_declarations`,
      {
        method: 'post',
        contentType: 'application/json',
        data: JSON.stringify({faDeclaration: submission.serialize()})
      }
    );
  },
  submitFAConfirmation(submission) {
    return Ember.$.ajax(`${ENV.APP.API_ENDPOINT}/api/v1/submissions/fa_confirmations`,
      {
        method: 'post',
        contentType: 'application/json',
        data: JSON.stringify({faConfirmation: submission.serialize()})
      }
    );
  }
});
