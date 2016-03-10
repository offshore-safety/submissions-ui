import Ember from 'ember';
import FAConfirmationForm from '../../models/fa-confirmation-form';
import Title from '../../models/title';
import TitleList from '../../models/title-list';
import Address from '../../models/address';
import TitleholderDetails from '../../models/titleholder-details';
import ConfirmationDetails from '../../models/confirmation-details';

export default Ember.Route.extend({
  submissionStore: Ember.inject.service(),
  pageTitleList: Ember.inject.service(),
  _initPageTitle: function() {
    this.get('pageTitleList').push({title: 'FA Confirmation', replace: true});
  }.on('init'),
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
  _confirmationDetails() {
    const confirmationDetails = ConfirmationDetails.create({});

    return confirmationDetails;
  },
  model(params) {
    let existing = this.get('submissionStore').retrieve(params.submissionId);

    if (existing) {
      console.log(`Returning existing submission with id '${params.submissionId}'`);
      const existingFASubmission = FAConfirmationForm.create().deserialize(existing);
      return existingFASubmission;
    } else {
      console.log(`Creating a new Financial Assurance Confirmation form`);
      const newFASubmission = FAConfirmationForm.create({
        id: params.submissionId,
        titles: this._titles(),
        titleholderDetails: this._titleholderDetails(),
        confirmationDetails: this._confirmationDetails()
      });

      return newFASubmission;
    }
  },
  renderTemplate(controller, model) {
    const navigationController = this.controllerFor('fa-confirmation.form.navigation');
    navigationController.set('model', model);
    this.render('fa-confirmation.form.navigation', {
      outlet: 'navigation',
      into: 'application',
      controller: navigationController
    });
  }
});
