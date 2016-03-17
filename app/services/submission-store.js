import Ember from 'ember';

export default Ember.Service.extend({
  localStorage: Ember.inject.service(),
  save(submission) {
    this.get('localStorage').setItem(`submission-${submission.get('id')}`, submission.serialize(), {ttl: 432000000} /* 5 days */);
  },
  retrieve(id) {
    const key = `submission-${id}`;
    if (this.get('localStorage').keyExpired(key)) {
      console.log(`Key has expired for '${id}'`);
      return null;
    }

    return this.get('localStorage').getItem(key);
  },
  clear(id) {
    this.get('localStorage').setItem(`submission-${id}`, null);
  }
});
