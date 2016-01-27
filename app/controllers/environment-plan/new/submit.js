import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Controller.extend({
  submitatron: Ember.inject.service(),
  submissionStore: Ember.inject.service(),
  validation: Ember.inject.service('validations.environment-plan'),
  actions: {
    validate() {
      const errors = this.get('validation').validate(this.get('model'));
      const keys = _.keys(errors);
      this.set('errorMessages', keys.map((k) => `${k} - ${errors[k]}`));
    },
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
      this.transitionToRoute('environment-plan.new.comments');
    }
  }
});
