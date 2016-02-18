import Ember from 'ember';
import ResetScroll from '../../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  submissionStatus: Ember.inject.service(),
  submissionStore: Ember.inject.service(),
  beforeModel() {
    this.get('submissionStatus').visiting(this.get('routeName'));
  },
  _pageModel() {
    return this.get('currentModel').get('submissionContact');
  },
  _copyContacts() {
    if (this._pageModel().get('sameAsLiaison')) {
      this.get('currentModel').set('liaisonContact', Ember.copy(this._pageModel(), true));
    }

    if (this._pageModel().get('sameAsActivity')) {
      this.get('currentModel').set('activityContact', Ember.copy(this._pageModel(), true));
    }
  },
  _saveCurrentModel() {
    this.get('submissionStore').save(this.get('currentModel'));
  },
  actions: {
    willTransition() {
      this._copyContacts();
      this._pageModel().set('visited', true);
      this._saveCurrentModel();
    }
  }
});
