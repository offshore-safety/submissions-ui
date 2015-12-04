import Ember from 'ember';

export default Ember.Service.extend({
  submit(submission) {
    return Ember.$.ajax('http://nopsema-api.dev/api/v1/submissions/environment_plans',
      {
        method: 'post',
        contentType: 'application/json',
        data: JSON.stringify({environmentPlan: submission})
      }
    );
  }
});
