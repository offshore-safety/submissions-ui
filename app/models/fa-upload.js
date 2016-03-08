import Ember from 'ember';
import Serializable from '../mixins/serializable';
import SubmissionContact from './submission-contact';
import FAAttachment from './fa-attachment';
import AdditionalInfo from './additional-info';

export default Ember.Object.extend(Serializable, {
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
  additionalInfo: null
});
