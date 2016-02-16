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
        const financialAssurance = store.createRecord('financial-assurance', {id: 'ltdm0'});
        const faDeclaration = store.createRecord('document', {});
        financialAssurance.set('faDeclaration', faDeclaration);
        faDeclaration.save();
        const faConfirmation = store.createRecord('document', {});
        financialAssurance.set('faConfirmation', faConfirmation);
        faConfirmation.save();
        financialAssurance.save();
        resolve(financialAssurance);
      };
      store.findRecord('financial-assurance', 'ltdm0').then(recordFound, recordNotFound);
    });

    return promise;
  },
  _saveCurrentModel() {
    const financialAssurance = this.get('currentModel');
    financialAssurance.get('faDeclaration').save();
    financialAssurance.get('faConfirmation').save();
    financialAssurance.save();
  },
  _raiseErrors(transition) {
    if (this.get('currentModel').get('hasErrors')) {
      if (!confirm('There are errors on this page, do you want to come back to them later?')) {
        transition.abort();
      }
    }
  },
  _notifyListeners() {
    this.get('submissionStatus').leaving('financial-assurance', this.get('currentModel').get('hasErrors'));
  },
  actions: {
    willTransition(transition) {
      this._saveCurrentModel();
      this._raiseErrors(transition);
      this._notifyListeners();
    }
  }
});
