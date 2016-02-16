import Ember from 'ember';
import ResetScroll from '../../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll,{
  submissionStatus: Ember.inject.service(),
  beforeModel() {
    this.get('submissionStatus').visiting(this.get('routeName'));
  },
  _pageModel() {
    return this.get('currentModel').get('documents');
  },
  _saveCurrentModel() {
    const environmentPlanDocuments = this._pageModel();
    environmentPlanDocuments.save();
    environmentPlanDocuments.get('environmentPlan').save();
    environmentPlanDocuments.get('attachments').forEach(function(attachment) {
      attachment.save();
    });
  },
  _raiseErrors(transition) {
    if (this._pageModel().get('hasErrors')) {
      if (!confirm('There are errors on this page, do you want to come back to them later?')) {
        transition.abort();
      }
    }
  },
  _notifyListeners() {
    this.get('submissionStatus').leaving('documents', this._pageModel().get('hasErrors'));
  },
  actions: {
    willTransition(transition) {
      this._saveCurrentModel();
      this._raiseErrors(transition);
      this._notifyListeners();
    }
  }
});
