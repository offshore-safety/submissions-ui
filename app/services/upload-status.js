import Ember from 'ember';

export default Ember.Service.extend({
  _inProgress: 0,
  uploadStarted() {
    this.set('_inProgress', this.get('_inProgress') + 1);
  },
  uploadCancelled() {
    this.set('_inProgress', this.get('_inProgress') - 1);
  },
  uploadComplete() {
    this.set('_inProgress', this.get('_inProgress') - 1);
  },
  inProgress: Ember.computed('_inProgress', function() {
    return this.get('_inProgress') > 0;
  })
});
