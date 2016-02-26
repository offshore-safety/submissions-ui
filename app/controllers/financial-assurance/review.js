import Ember from 'ember';

export default Ember.Controller.extend({
  submitatron: Ember.inject.service(),
  submissionStore: Ember.inject.service(),
  back: 'financial-assurance.additional-info',
  actions: {
    submit() {
      const onSuccess = (response) => {
        const model = this.get('model');
        model.set('receiptNumber', response.receiptNumber);
        model.set('submissionReceived', response.submissionReceived);
        model.set('responseDue', response.responseDue);
        this.transitionToRoute('financial-assurance.confirmation');
      };
      const onFailure = (result) => {
        alert(result.responseText);
      };
      this.get('submitatron').submit(this.get('model')).then(onSuccess, onFailure);
    }
  }
});
