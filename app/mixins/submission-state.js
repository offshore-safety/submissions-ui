import Ember from 'ember';

export default Ember.Mixin.create({
  submissionStatus: Ember.inject.service(),
  submissionStore: Ember.inject.service(),
  beforeModel() {
    this.get('submissionStatus').visiting(this.get('routeName'));
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
