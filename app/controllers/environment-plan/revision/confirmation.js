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

    const documentNames = [];

    documentNames.push(`${documents.get('environmentPlan').get('name')} (Environment Plan)`);
    documents.get('attachments').forEach((d) => documentNames.push(`${d.get('name')} (Attachment)`));

    const activityDetails = this.get('model').get('activityDetails');
    documentNames.push(`${activityDetails.get('locationMap').get('name')} (Location Map)`);

    const financialAssurance = this.get('model').get('financialAssurance');

    if (financialAssurance.get('includeDeclaration')) {
      documentNames.push(`${financialAssurance.get('faDeclaration').get('name')} (FA Declaration)`);
    }

    if (financialAssurance.get('includeConfirmation')) {
      documentNames.push(`${financialAssurance.get('faConfirmation').get('name')} (FA Confirmation)`);
    }



    return documentNames;
  }),
  actions: {
    goHome() {
      this.transitionToRoute('environment-plan.revision.before-you-start');
    }
  }
});
