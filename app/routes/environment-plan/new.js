import Ember from 'ember';

export default Ember.Route.extend({
  submissionStore: Ember.inject.service(),
  _activityDetails() {
    const store = this.store;
    const locationMap = store.createRecord('document');
    locationMap.save();
    const activityDetails = store.createRecord('activity-details', {
      locationMap
    });
    activityDetails.save();
    return activityDetails;
  },
  _titles() {
    const store = this.store;
    const titleList = store.createRecord('title-list');
    const title = store.createRecord('title');
    titleList.get('titles').pushObject(title);
    title.save();
    titleList.save();
    return titleList;
  },
  _titleholderDetails() {
    const store = this.store;
    const titleholderDetails = store.createRecord('titleholder-details');
    const businessAddress = store.createRecord('address');
    const postalAddress = store.createRecord('address');
    titleholderDetails.set('businessAddress', businessAddress);
    titleholderDetails.set('postalAddress', postalAddress);
    businessAddress.save();
    postalAddress.save();
    titleholderDetails.save();
    return titleholderDetails;
  },
  model(params) {
    const store = this.store;
    const self = this;
    const promise = new Ember.RSVP.Promise(function(resolve) {
      const recordFound = (existing) => {
        console.log(`Found record for ID '${params.submissionId}'`);
        resolve(existing);
      };
      const recordNotFound = function() {
        console.log(`No record found for ID '${params.submissionId}'`);
        const newEnvironmentPlan = store.createRecord('environment-plan', {
          activityDetails: self._activityDetails(),
          titles: self._titles(),
          titleholderDetails: self._titleholderDetails()
        });
        newEnvironmentPlan.set('id', params.submissionId);
        newEnvironmentPlan.save();
        resolve(newEnvironmentPlan);
      };
      store.findRecord('environment-plan', params.submissionId).then(recordFound, recordNotFound);
    });

    return promise;
  },
  renderTemplate() {
    this.render('environment-plan.new.navigation', {
      outlet: 'navigation',
      into: 'application'
    });
  }
});
