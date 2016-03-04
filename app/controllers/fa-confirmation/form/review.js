import Ember from 'ember';

export default Ember.Controller.extend({
  submitatron: Ember.inject.service(),
  submissionStore: Ember.inject.service(),
  back: 'fa-confirmation.form.confirmation-details',
  canPrint: Ember.computed('model.hasErrors', function() {
    return !this.get('model').get('hasErrors');
  }),
  actions: {
    print() {
      window.print();
    }
  }
});
