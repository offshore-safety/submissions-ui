import Ember from 'ember';

export default Ember.Controller.extend({
  submissionType: null,
  submittingEP: Ember.computed('submissionType', function() {
    return this.get('submissionType') === 'ep';
  }),
  submittingFA: Ember.computed('submissionType', function() {
    return this.get('submissionType') === 'fa';
  }),
  submittingOPP: Ember.computed('submissionType', function() {
    return this.get('submissionType') === 'opp';
  }),
  _typeChanged: Ember.observer('submissionType', function() {
    this.set('unavailable', false);
  }),
  actions: {
    submitEPNew() {
      const randomId = Math.floor(Math.random() * 1000000000);
      window.location.href = `/environment-plan/new/${randomId}/before-you-start`;
    },
    submitFinancialAssurance() {
      const randomId = Math.floor(Math.random() * 1000000000);
      window.location.href = `/financial-assurance/${randomId}/before-you-start`;
    },
    unavailableType() {
      this.set('unavailable', true);
    }
  }
});
