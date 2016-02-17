import Ember from 'ember';
import ResetScroll from '../../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  submissionStatus: Ember.inject.service(),
  beforeModel() {
    this.get('submissionStatus').visiting(this.get('routeName'));
  },
  _pageModel() {
    return this.get('currentModel').get('additionalInfo');
  },
  _saveCurrentModel() {
    const additionalInfo = this._pageModel();
    additionalInfo.save();
    additionalInfo.get('confirmationEmails').forEach(function(confirmationEmail) {
      confirmationEmail.save();
    });
  },
  _raiseErrors(transition) {
    if (this._pageModel().get('hasErrors')) {
      if (!confirm('There are errors on this page, do you want to come back to them later?')) {
        transition.abort();
      }
    }
  },
  _notifyListeners() {
    this.get('submissionStatus').leaving('additional-info', this.get('currentModel').get('hasErrors'));
  },
  _addConfirmationEmailTo(additionalInfo) {
    const newEmail = this.store.createRecord('confirmation-email', {});
    newEmail.save();
    additionalInfo.get('confirmationEmails').pushObject(newEmail);
    additionalInfo.save();
  },
  actions: {
    willTransition(transition) {
      this._saveCurrentModel();
      this._raiseErrors(transition);
      this._notifyListeners();
    },
    addConfirmationEmail() {
      const additionalInfo = this.get('currentModel');
      this._addConfirmationEmailTo(additionalInfo);
    }
  }
});
