import Ember from 'ember';
import ResetScroll from '../../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  submissionStatus: Ember.inject.service(),
  beforeModel() {
    this.get('submissionStatus').visiting(this.get('routeName'));
  },
  _pageModel() {
    return this.get('currentModel').get('financialAssurance');
  },
  _saveCurrentModel() {
    const financialAssurance = this._pageModel();
    financialAssurance.get('faDeclaration').save();
    financialAssurance.get('faConfirmation').save();
    financialAssurance.save();
  },
  _raiseErrors(transition) {
    if (this._pageModel().get('hasErrors')) {
      if (!confirm('There are errors on this page, do you want to come back to them later?')) {
        transition.abort();
      }
    }
  },
  _notifyListeners() {
    this.get('submissionStatus').leaving('financial-assurance', this._pageModel().get('hasErrors'));
  },
  actions: {
    willTransition(transition) {
      this._saveCurrentModel();
      this._raiseErrors(transition);
      this._notifyListeners();
    }
  }
});
