import Ember from 'ember';
import ResetScroll from '../../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll,{
  submissionStatus: Ember.inject.service(),
  beforeModel() {
    this.get('submissionStatus').visiting(this.get('routeName'));
  },
  _pageModel() {
    return this.get('currentModel').get('activityDetails');
  },
  _saveCurrentModel() {
    const activityDetails = this._pageModel();
    activityDetails.save();
    activityDetails.get('locationMap').save();
    activityDetails.get('activityTypes').forEach(function(activityType) {
      activityType.save();
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
    this.get('submissionStatus').leaving('activity-details', this._pageModel().get('hasErrors'));
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
