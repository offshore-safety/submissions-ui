import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  submitatron: Ember.inject.service(),
  submissionStore: Ember.inject.service(),
  actions: {
    submit() {
      this.get('model').set('receiptNumber', 'f4002ce0-b983-44ec-9391-d908426387ab');
      const now = moment();
      this.get('model').set('timestamp', `${now.format('dddd, MMMM Do YYYY')} at ${now.format('h:mm:ss a')}`);
      const due = now.add(32, 'days');
      this.get('model').set('responseDue', `${due.format('dddd, MMMM Do YYYY')}`);
      this.transitionToRoute('environment-plan.new.confirmation');
      // const onSuccess = (response) => {
      //   this.get('submissionStore').clear();
      //   this.transitionToRoute('environment-plan.new.confirmation', {queryParams: {receiptNumber: response.receiptNumber}});
      // };
      // const onFailure = (result) => {
      //   this.set('errors', result.responseText);
      //   alert('Oh snap');
      // };
      // this.get('submitatron').submit(this.get('model')).then(onSuccess, onFailure);
    },
    goBack() {
      this.transitionToRoute('environment-plan.new.additional-info');
    }
  }
});
