import Ember from 'ember';
import ResetScroll from '../../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  submissionStore: Ember.inject.service(),
  model() {
    return this.get('submissionStore').retrieve();
  },
  afterModel(model) {
    if (!model.environmentPlan) {
      model.environmentPlan = {};
    }
  },
  actions: {
    willTransition() {
      this.get('submissionStore').save(this.get('currentModel'));
    }
  }
});