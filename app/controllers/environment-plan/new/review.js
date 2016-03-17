import Ember from 'ember';
import NavigationControl from '../../../mixins/navigation-control';
import SubmissionErrors from '../../../mixins/submission-errors';

export default Ember.Controller.extend(NavigationControl, SubmissionErrors, {
  submitatron: Ember.inject.service(),
  submissionStore: Ember.inject.service(),
  back: 'environment-plan.new.additional-info',
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
        this.transitionToRoute('environment-plan.new.confirmation');
      };
      this.get('submitatron').submitEP(this.get('model')).then(onSuccess, (result) => this._onFailure(result));
    }
  }
});
