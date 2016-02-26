import Ember from 'ember';
import Serializable from '../mixins/serializable';
import TitleList from './title-list';
import TitleholderDetails from './titleholder-details';
import SubmissionContact from './submission-contact';
import FinancialAssurance from './financial-assurance';
import AdditionalInfo from './additional-info';

export default Ember.Object.extend(Serializable, {
  _serializableProperties: [
    'id', 'titles', 'titleholderDetails', 'submissionContact', 'financialAssurance', 'additionalInfo',
    'receiptNumber', 'submissionReceived', 'responseDue'
  ],
  _relationshipTypes: {
    'titles': TitleList,
    'titleholderDetails': TitleholderDetails,
    'submissionContact': SubmissionContact,
    'financialAssurance': FinancialAssurance,
    'additionalInfo': AdditionalInfo
  },
  id: null,
  titles: null,
  titleholderDetails: null,
  submissionContact: null,
  financialAssurance: null,
  additionalInfo: null
});
