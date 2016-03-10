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
  actions: {
    willTransition() {
      this._pageModel().set('visited', true);
      this._saveCurrentModel();
    }
  }
});
