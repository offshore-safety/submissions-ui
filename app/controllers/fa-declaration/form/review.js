import Ember from 'ember';

export default Ember.Controller.extend({
  submitatron: Ember.inject.service(),
  submissionStore: Ember.inject.service(),
  back: 'fa-declaration.form.declaration-options',
  actions: {
    print() {
      window.print();
    }
  }
});
