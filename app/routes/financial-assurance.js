import Ember from 'ember';
import FASubmission from '../models/fa-submission';
import Title from '../models/title';
import TitleList from '../models/title-list';
import Address from '../models/address';
import TitleholderDetails from '../models/titleholder-details';
import SubmissionContact from '../models/submission-contact';
import FinancialAssurance from '../models/financial-assurance';
import AdditionalInfo from '../models/additional-info';

export default Ember.Route.extend({
  submissionStore: Ember.inject.service(),
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
      const existingFASubmission = FASubmission.create().deserialize(existing);
      return existingFASubmission;
    } else {
      console.log(`Creating a new Financial Assurance submission`);
      const newFADelaration = FASubmission.create({
        id: params.submissionId,
        titles: this._titles(),
        titleholderDetails: this._titleholderDetails(),
        submissionContact: this._submissionContact(),
        financialAssurance: this._financialAssurance(),
        additionalInfo: this._additionalInfo()
      });

      return newFADelaration;
    }
  },
  renderTemplate(controller, model) {
    const navigationController = this.controllerFor('financial-assurance.navigation');
    navigationController.set('model', model);
    this.render('financial-assurance.navigation', {
      outlet: 'navigation',
      into: 'application',
      controller: navigationController
    });
  }
});
