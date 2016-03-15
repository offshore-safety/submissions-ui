import Ember from 'ember';

export default Ember.Controller.extend({
  submitatron: Ember.inject.service(),
  submissionStore: Ember.inject.service(),
  back: 'fa-confirmation.form.confirmation-details',
  actions: {
    print() {
      window.print();
    }
  }
});
