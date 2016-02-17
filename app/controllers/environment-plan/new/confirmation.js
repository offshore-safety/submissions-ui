import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['receiptNumber'],
  receiptNumber: null,
  documentNames: Ember.computed('model.activityDetails', 'model.documents', 'model.financialAssurance', function() {
    const documents = this.get('model').get('documents');
    const financialAssurance = this.get('model').get('financialAssurance');

    return [documents.get('environmentPlan').get('name')]
             .concat(documents.get('attachments').map((d) => d.get('name')));
  }),
  actions: {
    goHome() {
      this.transitionToRoute('environment-plan.new.before-you-start');
    }
  }
});
