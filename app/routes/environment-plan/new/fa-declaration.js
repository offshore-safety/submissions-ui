import Ember from 'ember';
import ResetScroll from '../../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  submissionStore: Ember.inject.service(),
  model() {
    return this.get('submissionStore').retrieve();
  },
  afterModel(model) {
    if (!model.faDeclaration) {
      model.faDeclaration = {
        includeFa: true,
        document: {}
      };
    }
  },
  actions: {
    willTransition() {
      this.get('submissionStore').save(this.get('currentModel'));
    }
  }
});
