import Ember from 'ember';
import ResetScroll from '../../../mixins/reset-scroll';
import SubmissionState from '../../../mixins/submission-state';

export default Ember.Route.extend(ResetScroll, SubmissionState, {
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
  actions: {
    willTransition() {
      this._copyContacts();
      this._super();
    }
  }
});
