import Ember from 'ember';

export default Ember.Service.extend({
  localStorage: Ember.inject.service(),
  save(submission) {
    this.get('localStorage').setItem(`submission-${submission.get('id')}`, submission.serialize());
  },
  retrieve(id) {
    return this.get('localStorage').getItem(`submission-${id}`);
  },
  clear(id) {
    this.get('localStorage').setItem(`submission-${id}`, null);
  }
});
