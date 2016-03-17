import Ember from 'ember';

export default Ember.Route.extend({
  submissionStatus: Ember.inject.service(),
  beforeModel() {
    this.get('submissionStatus').visiting(this.get('routeName'));
  }
});
