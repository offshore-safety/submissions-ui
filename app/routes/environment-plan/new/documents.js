import Ember from 'ember';
import ResetScroll from '../../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll,{
  submissionStatus: Ember.inject.service(),
  model() {
    const store = this.store;
    const promise = new Ember.RSVP.Promise(function(resolve) {
      const recordFound = (existing) => resolve(existing);
      const recordNotFound = function() {
        const environmentPlanDocuments = store.createRecord('environment-plan-documents', {id: 'ltdm0'});
        const document = store.createRecord('document', {});
        document.save();
        environmentPlanDocuments.set('environmentPlan', document);
        environmentPlanDocuments.save();
        resolve(environmentPlanDocuments);
      };
      store.findRecord('environment-plan-documents', 'ltdm0').then(recordFound, recordNotFound);
    });

    return promise;
  },
  _saveCurrentModel() {
    const environmentPlanDocuments = this.get('currentModel');
    environmentPlanDocuments.save();
    environmentPlanDocuments.get('environmentPlan').save();
    environmentPlanDocuments.get('attachments').forEach(function(attachment) {
      attachment.save();
    });
  },
  _raiseErrors(transition) {
    if (this.get('currentModel').get('hasErrors')) {
      if (!confirm('There are errors on this page, do you want to come back to them later?')) {
        transition.abort();
      }
    }
  },
  _notifyListeners() {
    this.get('submissionStatus').leaving('documents', this.get('currentModel').get('hasErrors'));
  },
  actions: {
    willTransition(transition) {
      this._saveCurrentModel();
      this._raiseErrors(transition);
      this._notifyListeners();
    }
  }
});
