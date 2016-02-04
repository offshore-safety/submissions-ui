import Ember from 'ember';

export default Ember.Controller.extend({
  submitatron: Ember.inject.service(),
  submissionStore: Ember.inject.service(),
  actions: {
    submit() {
      const onSuccess = (response) => {
        this.get('submissionStore').clear();
        this.transitionToRoute('environment-plan.new.confirmation', {queryParams: {receiptNumber: response.receiptNumber}});
      };
      const onFailure = (result) => {
        this.set('errors', result.responseText);
        alert('Oh snap');
      };
      this.get('submitatron').submit(this.get('model')).then(onSuccess, onFailure);
    },
    goBack() {
      this.transitionToRoute('environment-plan.new.confirmation-emails');
    }
  }
});
