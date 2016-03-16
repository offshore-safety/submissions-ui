import Ember from 'ember';

export default Ember.Controller.extend({
  submitatron: Ember.inject.service(),
  submissionStore: Ember.inject.service(),
  back: 'fa-declaration.upload.additional-info',
  actions: {
    submit() {
      const onSuccess = (response) => {
        const model = this.get('model');
        model.set('receiptNumber', response.receiptNumber);
        model.set('submissionReceived', response.submissionReceived);
        model.set('responseDue', response.responseDue);
        this.transitionToRoute('fa-declaration.upload.confirmation');
      };
      const onFailure = (result) => {
        alert(result.responseText);
      };
      this.get('submitatron').submitFADeclaration(this.get('model')).then(onSuccess, onFailure);
    }
  }
});
