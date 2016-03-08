import Ember from 'ember';

export default Ember.Controller.extend({
  submitatron: Ember.inject.service(),
  submissionStore: Ember.inject.service(),
  back: 'environment-plan.new.additional-info',
  actions: {
    submit() {
      // this.get('model').set('receiptNumber', 'f4002ce0-b983-44ec-9391-d908426387ab');
      // const now = moment();
      // this.get('model').set('timestamp', `${now.format('dddd, MMMM Do YYYY')} at ${now.format('h:mm:ss a')}`);
      // const due = now.add(32, 'days');
      // this.get('model').set('responseDue', `${due.format('dddd, MMMM Do YYYY')}`);
      // this.transitionToRoute('environment-plan.new.confirmation');
      const onSuccess = (response) => {
        const model = this.get('model');
        model.set('receiptNumber', response.receiptNumber);
        model.set('submissionReceived', response.submissionReceived);
        model.set('responseDue', response.responseDue);
        this.transitionToRoute('environment-plan.new.confirmation');
      };
      const onFailure = (result) => {
        alert(result.responseText);
      };
      this.get('submitatron').submitEP(this.get('model')).then(onSuccess, onFailure);
    }
  }
});
