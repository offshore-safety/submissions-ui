import Ember from 'ember';
import NavigationControl from '../../../mixins/navigation-control';

export default Ember.Controller.extend(NavigationControl, {
  submitatron: Ember.inject.service(),
  submissionStore: Ember.inject.service(),
  back: 'fa-confirmation.upload.additional-info',
  actions: {
    submit() {
      const onSuccess = (response) => {
        const model = this.get('model');
        model.set('receiptNumber', response.receiptNumber);
        model.set('submissionReceived', response.submissionReceived);
        model.set('responseDue', response.responseDue);
        this.transitionToRoute('fa-confirmation.upload.confirmation');
      };
      const onFailure = (result) => {
        alert(result.responseText);
      };
      this.get('submitatron').submitFAConfirmation(this.get('model')).then(onSuccess, onFailure);
    }
  }
});
