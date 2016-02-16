import Ember from 'ember';
import ResetScroll from '../../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  submissionStatus: Ember.inject.service(),
  beforeModel() {
    this.get('submissionStatus').visiting(this.get('routeName'));
  },
  model() {
    const store = this.store;
    const promise = new Ember.RSVP.Promise(function(resolve) {
      const recordFound = (existing) => resolve(existing);
      const recordNotFound = () => {
        const titleholderDetails = store.createRecord('titleholder-details', {id: 'ltdm0'});
        const businessAddress = store.createRecord('address', {});
        const postalAddress = store.createRecord('address', {});
        titleholderDetails.set('businessAddress', businessAddress);
        titleholderDetails.set('postalAddress', postalAddress);
        businessAddress.save();
        postalAddress.save();
        titleholderDetails.save();
        resolve(titleholderDetails);
      };
      store.findRecord('titleholder-details', 'ltdm0').then(recordFound, recordNotFound);
    });

    return promise;
  },
  _saveCurrentModel() {
    const titleholderDetails = this.get('currentModel');
    titleholderDetails.get('businessAddress').save();
    titleholderDetails.get('postalAddress').save();
    titleholderDetails.save();
  },
  _raiseErrors(transition) {
    if (this.get('currentModel').get('hasErrors')) {
      if (!confirm('There are errors on this page, do you want to come back to them later?')) {
        transition.abort();
      }
    }
  },
  _notifyListeners() {
    this.get('submissionStatus').leaving('titleholder-details', this.get('currentModel').get('hasErrors'));
  },
  actions: {
    willTransition(transition) {
      this._saveCurrentModel();
      this._raiseErrors(transition);
      this._notifyListeners();
    }
  }
});
