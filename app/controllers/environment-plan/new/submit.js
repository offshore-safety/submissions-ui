import Ember from 'ember';

export default Ember.Controller.extend({
  submitatron: Ember.inject.service(),
  actions: {
    submit() {
      this.get('submitatron').submit(this.get('model')).then(() => console.log('winning'), () => console.error('fail'));
    },
    goBack() {
      this.transitionToRoute('environment-plan.new.submission-contact');
    }
  }
});
