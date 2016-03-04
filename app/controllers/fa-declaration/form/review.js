import Ember from 'ember';

export default Ember.Controller.extend({
  submitatron: Ember.inject.service(),
  submissionStore: Ember.inject.service(),
  back: 'fa-declaration.form.declaration-options',
  canPrint: Ember.computed('model.hasErrors', function() {
    return !this.get('model').get('hasErrors');
  }),
  actions: {
    print() {
      window.print();
    }
  }
});
