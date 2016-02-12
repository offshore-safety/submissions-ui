import Ember from 'ember';
import ResetScroll from '../../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll,{
  submissionStatus: Ember.inject.service(),
  model() {
    const store = this.store;
    const self = this;
    const promise = new Ember.RSVP.Promise(function(resolve) {
      const recordFound = (existing) => resolve(existing);
      const recordNotFound = function() {
        const titleList = store.createRecord('title-list', {id: 'ltdm0'});
        self._addTitleTo(titleList);
        resolve(titleList);
      };
      store.findRecord('title-list', 'ltdm0').then(recordFound, recordNotFound);
    });

    return promise;
  },
  _saveCurrentModel() {
    const titleList = this.get('currentModel');
    titleList.save();
    titleList.get('titles').forEach(function(title) {
      title.save();
    });
  },
  _raiseErrors(transition) {
    if (this.get('currentModel').get('hasErrors')) {
      if (!confirm('There are errors on this page, do you want to come back to them later?')) {
        transition.abort();
      }
    }
  },
  _notifyListeners() {
    this.get('submissionStatus').leaving('title-list', this.get('currentModel').get('hasErrors'));
  },
  _addTitleTo(titleList) {
    const newTitle = this.store.createRecord('title', {
      titleList
    });
    newTitle.save();
    titleList.get('titles').pushObject(newTitle);
    titleList.save();
  },
  actions: {
    willTransition(transition) {
      this._saveCurrentModel();
      this._raiseErrors(transition);
      this._notifyListeners();
    },
    addTitle() {
      const titleList = this.get('currentModel');
      this._addTitleTo(titleList);
    }
  }
});
