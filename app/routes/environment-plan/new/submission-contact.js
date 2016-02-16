import Ember from 'ember';
import ResetScroll from '../../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  submissionStatus: Ember.inject.service(),
  model() {
    const store = this.store;
    const promise = new Ember.RSVP.Promise(function(resolve) {
      const recordFound = (existing) => resolve(existing);
      const recordNotFound = () => {
        const contact = store.createRecord('submission-contact', {id: 'ltdm0'});
        const postalAddress = store.createRecord('address', {});
        contact.set('postalAddress', postalAddress);
        postalAddress.save();
        contact.save();
        resolve(contact);
      };
      store.findRecord('submission-contact', 'ltdm0').then(recordFound, recordNotFound);
    });

    return promise;
  },
  _saveCurrentModel() {
    const contact = this.get('currentModel');
    contact.get('postalAddress').save();
    contact.save();
  },
  _raiseErrors(transition) {
    if (this.get('currentModel').get('hasErrors')) {
      if (!confirm('There are errors on this page, do you want to come back to them later?')) {
        transition.abort();
      }
    }
  },
  _notifyListeners() {
    this.get('submissionStatus').leaving('submission-contact', this.get('currentModel').get('hasErrors'));
  },
  actions: {
    willTransition(transition) {
      this._saveCurrentModel();
      this._raiseErrors(transition);
      this._notifyListeners();
    }
  }
});
