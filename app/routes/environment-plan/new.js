import Ember from 'ember';

export default Ember.Route.extend({
  submissionStore: Ember.inject.service(),
  _activityDetails(id) {
    const store = this.store;
    const locationMap = store.createRecord('document');
    locationMap.save();
    const activityDetails = store.createRecord('activity-details', {
      id,
      locationMap
    });
    activityDetails.save();
    return activityDetails;
  },
  _titles(id) {
    const store = this.store;
    const titleList = store.createRecord('title-list', {
      id
    });
    const title = store.createRecord('title');
    titleList.get('titles').pushObject(title);
    title.save();
    titleList.save();
    return titleList;
  },
  _titleholderDetails(id) {
    const store = this.store;
    const businessAddress = store.createRecord('address');
    const postalAddress = store.createRecord('address');
    businessAddress.save();
    postalAddress.save();
    const titleholderDetails = store.createRecord('titleholder-details', {
      id,
      businessAddress,
      postalAddress
    });
    titleholderDetails.save();
    return titleholderDetails;
  },
  _submissionContact(id) {
    const store = this.store;
    const postalAddress = store.createRecord('address');
    postalAddress.save();
    const contact = store.createRecord('submission-contact', {
      id,
      postalAddress
    });
    contact.save();

    return contact;
  },
  _liaisonContact(id) {
    const store = this.store;
    const postalAddress = store.createRecord('address');
    postalAddress.save();
    const contact = store.createRecord('liaison-contact', {
      id,
      postalAddress
    });
    contact.save();

    return contact;
  },
  _activityContact(id) {
    const store = this.store;
    const postalAddress = store.createRecord('address');
    postalAddress.save();
    const contact = store.createRecord('activity-contact', {
      id,
      postalAddress
    });
    contact.save();

    return contact;
  },
  _documents(id) {
    const store = this.store;
    const environmentPlan = store.createRecord('document');
    environmentPlan.save();
    const environmentPlanDocuments = store.createRecord('environment-plan-documents', {
      id,
      environmentPlan
    });
    environmentPlanDocuments.save();

    return environmentPlanDocuments;
  },
  _financialAssurance(id) {
    const store = this.store;
    const faDeclaration = store.createRecord('document');
    faDeclaration.save();
    const faConfirmation = store.createRecord('document');
    faConfirmation.save();
    const financialAssurance = store.createRecord('financial-assurance', {
      id,
      faDeclaration,
      faConfirmation
    });
    financialAssurance.save();

    return financialAssurance;
  },
  _additionalInfo(id) {
    const store = this.store;
    const additionalInfo = store.createRecord('additional-info');
    additionalInfo.save();

    return additionalInfo;
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
          id: params.submissionId,
          activityDetails: self._activityDetails(params.submissionId),
          titles: self._titles(params.submissionId),
          titleholderDetails: self._titleholderDetails(params.submissionId),
          submissionContact: self._submissionContact(params.submissionId),
          liaisonContact: self._liaisonContact(params.submissionId),
          activityContact: self._activityContact(params.submissionId),
          documents: self._documents(params.submissionId),
          financialAssurance: self._financialAssurance(params.submissionId),
          additionalInfo: self._additionalInfo(params.submissionId)
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
