import Ember from 'ember';

export default Ember.Route.extend({
  submissionStore: Ember.inject.service(),
  model() {
    return this.get('submissionStore').retrieve();
  },
  afterModel(model) {
    if (!model.submissionContact) {
      model.submissionContact = {};
    }
  },
  actions: {
    willTransition() {
      this.get('submissionStore').save(this.get('currentModel'));
    }
  }
});
