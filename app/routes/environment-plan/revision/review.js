import Ember from 'ember';
import ResetScroll from '../../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  submissionStatus: Ember.inject.service(),
  submissionStore: Ember.inject.service(),
  beforeModel() {
    this.get('submissionStatus').visiting(this.get('routeName'));
  },
  actions: {
    willTransition() {
      this.get('submissionStore').save(this.get('currentModel'));
    }
  }
});
