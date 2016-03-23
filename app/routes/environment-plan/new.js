import Ember from 'ember';
import EPNew from '../../models/flows/ep-new';
import ActivityDetails from '../../models/activity-details';
import Title from '../../models/title';
import TitleList from '../../models/title-list';
import Address from '../../models/address';
import TitleholderDetails from '../../models/titleholder-details';
import SubmissionContact from '../../models/submission-contact';
import LiaisonContact from '../../models/liaison-contact';
import ActivityContact from '../../models/activity-contact';
import EnvironmentPlanDocuments from '../../models/environment-plan-documents';
import FinancialAssurance from '../../models/financial-assurance';
import AdditionalInfo from '../../models/additional-info';

export default Ember.Route.extend({
  submissionStore: Ember.inject.service(),
  pageTitleList: Ember.inject.service(),
  _initPageTitle: function() {
    this.get('pageTitleList').push({title: 'New EP', replace: true});
  }.on('init'),
  _activityDetails() {
    const activityDetails = ActivityDetails.create();

    return activityDetails;
  },
  _titles() {
    const titleList = TitleList.create({titles: []});
    const title = Title.create();
    titleList.get('titles').pushObject(title);

    return titleList;
  },
  _titleholderDetails() {
    const businessAddress = Address.create();
    const postalAddress = Address.create();
    const titleholderDetails = TitleholderDetails.create({
      businessAddress,
      postalAddress
    });

    return titleholderDetails;
  },
  _submissionContact() {
    const postalAddress = Address.create();
    const contact = SubmissionContact.create({
      postalAddress
    });

    return contact;
  },
  _liaisonContact() {
    const postalAddress = Address.create();
    const contact = LiaisonContact.create({
      postalAddress
    });

    return contact;
  },
  _activityContact() {
    const postalAddress = Address.create();
    const contact = ActivityContact.create({
      postalAddress
    });

    return contact;
  },
  _documents() {
    const environmentPlanDocuments = EnvironmentPlanDocuments.create();

    return environmentPlanDocuments;
  },
  _financialAssurance() {
    const financialAssurance = FinancialAssurance.create();

    return financialAssurance;
  },
  _additionalInfo() {
    const additionalInfo = AdditionalInfo.create();

    return additionalInfo;
  },
  model(params) {
    let existing = this.get('submissionStore').retrieve(params.submissionId);

    if (existing) {
      console.log(`Returning existing submission with id '${params.submissionId}'`);
      const existingEnvironmentPlan = EPNew.create().deserialize(existing);
      return existingEnvironmentPlan;
    } else {
      console.log(`Creating a new Environment Plan`);
      const newEnvironmentPlan = EPNew.create({
        id: params.submissionId,
        activityDetails: this._activityDetails(),
        titles: this._titles(),
        titleholderDetails: this._titleholderDetails(),
        submissionContact: this._submissionContact(),
        liaisonContact: this._liaisonContact(),
        activityContact: this._activityContact(),
        documents: this._documents(),
        financialAssurance: this._financialAssurance(),
        additionalInfo: this._additionalInfo()
      });

      return newEnvironmentPlan;
    }
  },
  renderTemplate(controller, model) {
    const navigationController = this.controllerFor('environment-plan.new.navigation');
    navigationController.set('model', model);
    this.render('environment-plan.new.navigation', {
      outlet: 'navigation',
      into: 'application',
      controller: navigationController
    });
  }
});
