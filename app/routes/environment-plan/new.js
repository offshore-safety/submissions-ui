import Ember from 'ember';

export default Ember.Route.extend({
  submissionStore: Ember.inject.service(),
  renderTemplate() {
    this.render('environment-plan.new.navigation', {
      outlet: 'navigation',
      into: 'application'
    });
  }
});
