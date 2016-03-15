import Ember from 'ember';
import Serializable from '../../mixins/serializable';
import Errors from '../../mixins/errors';
import SubmissionContact from '../submission-contact';
import FAAttachments from '../fa-attachments';
import AdditionalInfo from '../additional-info';

export default Ember.Object.extend(Serializable, Errors, {
  _serializableProperties: [
    'id', 'submissionContact', 'attachments', 'additionalInfo', 'receiptNumber', 'submissionReceived', 'responseDue'
  ],
  _relationshipTypes: {
    'submissionContact': SubmissionContact,
    'attachments': FAAttachments,
    'additionalInfo': AdditionalInfo
  },
  id: null,
  submissionContact: null,
  attachments: null,
  additionalInfo: null,
  errors: Ember.computed('submissionContact.errors', 'attachments.errors', 'additionalInfo.errors', function() {
    const errors = {};

    errors['submissionContact'] = this.get('submissionContact').get('errors');
    errors['attachments'] = this.get('attachments').get('errors');
    errors['additionalInfo'] = this.get('additionalInfo').get('errors');

    return errors;
  })
});
