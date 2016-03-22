import Ember from 'ember';
import FADeclarationUpload from '../../models/flows/fa-declaration-upload';
import Address from '../../models/address';
import SubmissionContact from '../../models/submission-contact';
import FAAttachments from '../../models/fa-attachments';
import AdditionalInfo from '../../models/additional-info';

export default Ember.Route.extend({
  submissionStore: Ember.inject.service(),
  pageTitleList: Ember.inject.service(),
  _initPageTitle: function() {
    this.get('pageTitleList').push({title: 'FA Declaration', replace: true});
  }.on('init'),
  _submissionContact() {
    const postalAddress = Address.create();
    const contact = SubmissionContact.create({
      titleholderNameRequired: true,
      postalAddress
    });

    return contact;
  },
  _attachments() {
    const attachment = FAAttachments.create();

    return attachment;
  },
  _additionalInfo() {
    const additionalInfo = AdditionalInfo.create();

    return additionalInfo;
  },
  model(params) {
    let existing = this.get('submissionStore').retrieve(params.submissionId);

    if (existing) {
      console.log(`Returning existing submission with id '${params.submissionId}'`);
      const existingFASubmission = FADeclarationUpload.create().deserialize(existing);
      return existingFASubmission;
    } else {
      console.log(`Creating a new FA Declaration upload submission`);
      const newFASubmission = FADeclarationUpload.create({
        id: params.submissionId,
        submissionContact: this._submissionContact(),
        attachments: this._attachments(),
        additionalInfo: this._additionalInfo()
      });

      return newFASubmission;
    }
  },
  renderTemplate(controller, model) {
    const navigationController = this.controllerFor('fa-declaration.upload.navigation');
    navigationController.set('model', model);
    this.render('fa-declaration.upload.navigation', {
      outlet: 'navigation',
      into: 'application',
      controller: navigationController
    });
  }
});
