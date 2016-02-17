import Ember from 'ember';
import ResetScroll from '../../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  submissionStatus: Ember.inject.service(),
  submissionStore: Ember.inject.service(),
  beforeModel() {
    this.get('submissionStatus').visiting(this.get('routeName'));
  },
  _pageModel() {
    return this.get('currentModel').get('activityContact');
  },
  _saveCurrentModel() {
    this.get('submissionStore').save(this.get('currentModel'));
  },
  _raiseErrors(transition) {
    if (this._pageModel().get('hasErrors')) {
      if (!confirm('There are errors on this page, do you want to come back to them later?')) {
        transition.abort();
      }
    }
  },
  _notifyListeners() {
    this.get('submissionStatus').leaving('activity-contact', this._pageModel().get('hasErrors'));
  },
  actions: {
    willTransition(transition) {
      this._saveCurrentModel();
      this._raiseErrors(transition);
      this._notifyListeners();
    }
  }
});
