import Ember from 'ember';
import ENV from 'submissions-ui/config/environment';

export default Ember.Service.extend({
  submit(submission) {
    return Ember.$.ajax(`${ENV.APP.API_ENDPOINT}/api/v1/submissions/environment_plans`,
      {
        method: 'post',
        contentType: 'application/json',
        data: JSON.stringify({environmentPlan: submission})
      }
    );
  }
});
