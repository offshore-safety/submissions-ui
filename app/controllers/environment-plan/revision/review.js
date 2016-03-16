import Ember from 'ember';

export default Ember.Controller.extend({
  submitatron: Ember.inject.service(),
  submissionStore: Ember.inject.service(),
  back: 'environment-plan.revision.additional-info',
  greenhouseGasActivity: Ember.computed('model.activityDetails.regulationType', function() {
    return this.get('model').get('activityDetails').get('regulationType') === 'greenhouse_gas';
  }),
  showLevies: Ember.computed('model.activityDetails.errors', 'model.titles.errors', function() {
    const detailsErrors = this.get('model').get('activityDetails').get('hasErrors');
    const titlesErrors = this.get('model').get('titles').get('hasErrors');
    return !(detailsErrors || titlesErrors);
  }),
  actions: {
    submit() {
      const onSuccess = (response) => {
        const model = this.get('model');
        model.set('receiptNumber', response.receiptNumber);
        model.set('submissionReceived', response.submissionReceived);
        model.set('responseDue', response.responseDue);
        this.transitionToRoute('environment-plan.revision.confirmation');
      };
      const onFailure = (result) => {
        alert(result.responseText);
      };
      this.get('submitatron').submitEP(this.get('model')).then(onSuccess, onFailure);
    }
  }
});
