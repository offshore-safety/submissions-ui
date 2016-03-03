import Ember from 'ember';
import ResetScroll from '../../../mixins/reset-scroll';
import SubmissionState from '../../../mixins/submission-state';

export default Ember.Route.extend(ResetScroll, SubmissionState, {
  _pageModel() {
    return this.get('currentModel').get('titleholderDetails');
  },
  _copyAddress() {
    if (this._pageModel().get('sameAsBusiness')) {
      this._pageModel().set('postalAddress', Ember.copy(this._pageModel().get('businessAddress'), true));
    }
  },
  actions: {
    willTransition() {
      this._copyAddress();
      this._super();
    }
  }
});
