import Ember from 'ember';

export default Ember.Mixin.create({
  submissionStore: Ember.inject.service(),
  afterModel(model) {
    this.get('submissionStore').clear(model.get('id'));
  }
});
