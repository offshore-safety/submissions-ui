import Ember from 'ember';
import Serializable from '../mixins/serializable';
import Errors from '../mixins/errors';
import SubmissionContact from './submission-contact';
import FAAttachment from './fa-attachment';
import AdditionalInfo from './additional-info';

export default Ember.Object.extend(Serializable, Errors, {
  _serializableProperties: [
    'id', 'submissionContact', 'attachment', 'additionalInfo', 'receiptNumber', 'submissionReceived', 'responseDue'
  ],
  _relationshipTypes: {
    'submissionContact': SubmissionContact,
    'attachment': FAAttachment,
    'additionalInfo': AdditionalInfo
  },
  id: null,
  submissionContact: null,
  attachment: null,
  additionalInfo: null,
  errors: Ember.computed('submissionContact.errors', 'attachment.errors', 'additionalInfo.errors', function() {
    const errors = {};

    errors['submissionContact'] = this.get('submissionContact').get('errors');
    errors['attachment'] = this.get('attachment').get('errors');
    errors['additionalInfo'] = this.get('additionalInfo').get('errors');

    return errors;
  })
});
