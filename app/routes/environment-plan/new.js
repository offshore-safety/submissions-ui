import Ember from 'ember';
import EnvironmentPlan from '../../models/environment-plan'
import Document from '../../models/document';
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

export default Ember.Route.extend({
  submissionStore: Ember.inject.service(),
  _activityDetails() {
    const locationMap = Document.create();
    const activityDetails = ActivityDetails.create({
      locationMap
    });

    return activityDetails;
  },
  _titles() {
    const title = Title.create();
    const titleList = TitleList.create();
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
    const environmentPlan = Document.create();
    const environmentPlanDocuments = EnvironmentPlanDocuments.create({
      environmentPlan
    });

    return environmentPlanDocuments;
  },
  _financialAssurance() {
    const faDeclaration = Document.create();
    const faConfirmation = Document.create();
    const financialAssurance = FinancialAssurance.create({
      faDeclaration,
      faConfirmation
    });

    return financialAssurance;
  },
  _additionalInfo(id) {
    const store = this.store;
    const additionalInfo = store.createRecord('additional-info', {
      id
    });
    additionalInfo.save();

    return additionalInfo;
  },
  model(params) {
    let existing = this.get('submissionStore').retrieve(params.submissionId);

    if (existing) {
      console.log(`Returning existing submission with id '${params.submissionId}'`);
      const existingEnvironmentPlan = EnvironmentPlan.create().deserialize(existing);
      return existingEnvironmentPlan;
    } else {
      console.log(`Creating a new Environment Plan`);
      const newEnvironmentPlan = EnvironmentPlan.create({
        id: params.submissionId,
        activityDetails: this._activityDetails(),
        titles: this._titles(),
        titleholderDetails: this._titleholderDetails(),
        submissionContact: this._submissionContact(),
        liaisonContact: this._liaisonContact(),
        activityContact: this._activityContact(),
        documents: this._documents(),
        financialAssurance: this._financialAssurance(),
      });

      return newEnvironmentPlan;
    }
  },
  renderTemplate() {
    this.render('environment-plan.new.navigation', {
      outlet: 'navigation',
      into: 'application'
    });
  }
});
