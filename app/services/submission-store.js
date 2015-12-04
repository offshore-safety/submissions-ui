import Ember from 'ember';

export default Ember.Service.extend({
  localStorage: Ember.inject.service(),
  save(submission) {
    this.get('localStorage').setItem('submission', submission);
  },
  retrieve() {
    return this.get('localStorage').getItem('submission') || {};
  },
  clear() {
    this.get('localStorage').setItem('submission', null);
  }
});
