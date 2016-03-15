import Ember from 'ember';
import FAConfirmationUpload from '../../models/flows/fa-confirmation-upload';
import Address from '../../models/address';
import SubmissionContact from '../../models/submission-contact';
import FAAttachment from '../../models/fa-attachment';
import AdditionalInfo from '../../models/additional-info';

export default Ember.Route.extend({
  submissionStore: Ember.inject.service(),
  pageTitleList: Ember.inject.service(),
  _initPageTitle: function() {
    this.get('pageTitleList').push({title: 'FA Confirmation', replace: true});
  }.on('init'),
  _submissionContact() {
    const postalAddress = Address.create({required: true});
    const contact = SubmissionContact.create({
      postalAddress
    });

    return contact;
  },
  _attachment() {
    const attachment = FAAttachment.create();

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
      const existingFASubmission = FAConfirmationUpload.create().deserialize(existing);
      return existingFASubmission;
    } else {
      console.log(`Creating a new FA Confirmation upload submission`);
      const newFASubmission = FAConfirmationUpload.create({
        id: params.submissionId,
        submissionContact: this._submissionContact(),
        attachment: this._attachment(),
        additionalInfo: this._additionalInfo()
      });

      return newFASubmission;
    }
  },
  renderTemplate(controller, model) {
    const navigationController = this.controllerFor('fa-confirmation.upload.navigation');
    navigationController.set('model', model);
    this.render('fa-confirmation.upload.navigation', {
      outlet: 'navigation',
      into: 'application',
      controller: navigationController
    });
  }
});
