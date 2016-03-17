import Ember from 'ember';
import NavigationControl from '../../../mixins/navigation-control';
import SubmissionErrors from '../../../mixins/submission-errors';

export default Ember.Controller.extend(NavigationControl, SubmissionErrors, {
  submitatron: Ember.inject.service(),
  submissionStore: Ember.inject.service(),
  back: 'fa-confirmation.upload.additional-info',
  actions: {
    submit() {
      const onSuccess = (response) => {
        const model = this.get('model');
        model.set('receiptNumber', response.receiptNumber);
        model.set('submissionReceived', response.submissionReceived);
        this.transitionToRoute('fa-confirmation.upload.confirmation');
      };
      this.get('submitatron').submitFAConfirmation(this.get('model')).then(onSuccess, (result) => this._onFailure(result));
    }
  }
});
