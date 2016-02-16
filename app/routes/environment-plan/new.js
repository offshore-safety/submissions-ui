import Ember from 'ember';

export default Ember.Route.extend({
  submissionStore: Ember.inject.service(),
  model(params) {
    const store = this.store;
    const promise = new Ember.RSVP.Promise(function(resolve) {
      const recordFound = (existing) => resolve(existing);
      const recordNotFound = function() {
        const locationMap = store.createRecord('document');
        locationMap.save();
        const activityDetails = store.createRecord('activity-details', {
          locationMap
        });
        activityDetails.save();
        const titleList = store.createRecord('title-list');
        const title = store.createRecord('title');
        titleList.get('titles').pushObject(title);
        title.save();
        titleList.save();
        const newEnvironmentPlan = store.createRecord('environment-plan', {
          id: params.id,
          activityDetails,
          titles: titleList
        });
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
