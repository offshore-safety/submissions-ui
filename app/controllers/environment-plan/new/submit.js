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
        if (result.status === 502) {
          this.transitionToRoute('errors.bad-gateway');
        }
        else {
          alert('Oh snap');
        }
      };
      this.get('submitatron').submit(this.get('model')).then(onSuccess, onFailure);
    },
    goBack() {
      this.transitionToRoute('environment-plan.new.comments');
    }
  }
});
