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
  _generateRandomId() {
    return Math.floor(Math.random() * 1000000000);
  },
  actions: {
    submitEPNew() {
      window.location.href = `/environment-plan/new/${this._generateRandomId()}/before-you-start`;
    },
    submitFAConfirmation() {
      window.location.href = `/fa-confirmation/upload/${this._generateRandomId()}/before-you-start`;
    },
    submitFADeclaration() {
      window.location.href = `/fa-declaration/upload/${this._generateRandomId()}/before-you-start`;
    },
    generateFAConfirmation() {
      window.location.href = `/fa-confirmation/form/${this._generateRandomId()}/before-you-start`;
    },
    generateFADeclaration() {
      window.location.href = `/fa-declaration/form/${this._generateRandomId()}/before-you-start`;
    },
    unavailableType() {
      this.set('unavailable', true);
    }
  }
});
