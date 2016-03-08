import Ember from 'ember';

export default Ember.Mixin.create({
  uploadStatus: Ember.inject.service(),
  navigationDisabled: Ember.computed('uploadStatus.inProgress', function() {
    return this.get('uploadStatus').get('inProgress');
  })
});
