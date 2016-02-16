import Ember from 'ember';
import ResetScroll from '../../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll,{
  submissionStatus: Ember.inject.service(),
  beforeModel() {
    this.get('submissionStatus').visiting(this.get('routeName'));
  },
  model() {
    const store = this.store;
    const promise = new Ember.RSVP.Promise(function(resolve) {
      const recordFound = (existing) => resolve(existing);
      const recordNotFound = function() {
        const activityDetails = store.createRecord('activity-details', {id: 'ltdm0'});
        const locationMap = store.createRecord('document', {});
        locationMap.save();
        activityDetails.set('locationMap', locationMap);
        activityDetails.save();
        resolve(activityDetails);
      };
      store.findRecord('activity-details', 'ltdm0').then(recordFound, recordNotFound);
    });

    return promise;
  },
  _saveCurrentModel() {
    const activityDetails = this.get('currentModel');
    activityDetails.save();
    activityDetails.get('locationMap').save();
    activityDetails.get('activityTypes').forEach(function(activityType) {
      activityType.save();
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
    this.get('submissionStatus').leaving('activity-details', this.get('currentModel').get('hasErrors'));
  },
  _addActivityTypeTo(activityDetails) {
    const newType = this.store.createRecord('activity-type', {});
    newType.save();
    activityDetails.get('activityTypes').pushObject(newType);
    activityDetails.save();
  },
  actions: {
    willTransition(transition) {
      this._saveCurrentModel();
      this._raiseErrors(transition);
      this._notifyListeners();
    },
    addActivityType() {
      const activityDetails = this.get('currentModel');
      this._addActivityTypeTo(activityDetails);
    }
  }
});
