import Ember from 'ember';
import moment from 'moment';

const dateFormat = 'dddd, MMMM Do YYYY';

export default Ember.Controller.extend({
  submissionReceived: Ember.computed('model.submissionReceived', function() {
    return moment(this.get('model').get('submissionReceived')).format(`${dateFormat}, h:mm:ss a`);
  }),
  responseDue: Ember.computed('model.submissionReceived', function() {
    return moment(this.get('model').get('responseDue')).format(dateFormat);
  }),
  documentNames: Ember.computed('model.activityDetails', 'model.documents', 'model.financialAssurance', function() {
    const documents = this.get('model').get('documents');

    return [documents.get('environmentPlan').get('name')]
             .concat(documents.get('attachments').map((d) => d.get('name')));
  }),
  actions: {
    goHome() {
      this.transitionToRoute('environment-plan.new.before-you-start');
    }
  }
});
