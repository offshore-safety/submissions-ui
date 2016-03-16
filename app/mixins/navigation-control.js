import Ember from 'ember';

export default Ember.Mixin.create({
  uploadStatus: Ember.inject.service(),
  submitatron: Ember.inject.service(),
  navigationDisabled: Ember.computed('uploadStatus.inProgress', 'submitatron.inProgress', function() {
    return this.get('uploadStatus').get('inProgress') || this.get('submitatron').get('inProgress');
  }),
  submitDisabled: Ember.computed('model.hasErrors', 'navigationDisabled', function() {
    return this.get('model').get('hasErrors') || this.get('navigationDisabled');
  }),
});
