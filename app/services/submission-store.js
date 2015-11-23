import Ember from 'ember';

export default Ember.Service.extend({
  save(submission) {
    window.localStorage.setItem('submission', submission);
  },
  retrieve() {
    return window.localStorage.getItem('submission');
  }
});
