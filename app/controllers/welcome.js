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
      this.transitionToRoute('environment-plan.new.before-you-start', this._generateRandomId());
    },
    submitEPRevision() {
      this.transitionToRoute('environment-plan.revision.before-you-start', this._generateRandomId());
    },
    submitFAConfirmation() {
      this.transitionToRoute('fa-confirmation.upload.before-you-start', this._generateRandomId());
    },
    submitFADeclaration() {
      this.transitionToRoute('fa-declaration.upload.before-you-start', this._generateRandomId());
    },
    generateFAConfirmation() {
      this.transitionToRoute('fa-confirmation.form.before-you-start', this._generateRandomId());
    },
    generateFADeclaration() {
      this.transitionToRoute('fa-declaration.form.before-you-start', this._generateRandomId());
    },
    unavailableType() {
      this.set('unavailable', true);
    }
  }
});
