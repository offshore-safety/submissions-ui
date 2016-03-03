import Ember from 'ember';
import FADeclarationForm from '../../models/fa-declaration-form';
import Title from '../../models/title';
import TitleList from '../../models/title-list';
import Address from '../../models/address';
import TitleholderDetails from '../../models/titleholder-details';

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
  model(params) {
    let existing = this.get('submissionStore').retrieve(params.submissionId);

    if (existing) {
      console.log(`Returning existing submission with id '${params.submissionId}'`);
      const existingFASubmission = FADeclarationForm.create().deserialize(existing);
      return existingFASubmission;
    } else {
      console.log(`Creating a new Financial Assurance Declaration form`);
      const newFADelaration = FADeclarationForm.create({
        id: params.submissionId,
        titles: this._titles(),
        titleholderDetails: this._titleholderDetails(),
      });

      return newFADelaration;
    }
  },
  renderTemplate(controller, model) {
    const navigationController = this.controllerFor('fa-declaration.form.navigation');
    navigationController.set('model', model);
    this.render('fa-declaration.form.navigation', {
      outlet: 'navigation',
      into: 'application',
      controller: navigationController
    });
  }
});
