import Ember from 'ember';
import Serializable from '../mixins/serializable';
import ActivityDetails from './activity-details';
import TitleList from './title-list';
import TitleholderDetails from './titleholder-details';
import SubmissionContact from './submission-contact';
import LiaisonContact from './liaison-contact';
import ActivityContact from './activity-contact';
import EnvironmentPlanDocuments from './environment-plan-documents';
import FinancialAssurance from './financial-assurance';
import AdditionalInfo from './additional-info';

export default Ember.Object.extend(Serializable, {
  _serializableProperties: [
    'id', 'type', 'activityDetails', 'titles', 'titleholderDetails', 'submissionContact', 'liaisonContact', 'activityContact',
    'documents', 'financialAssurance', 'additionalInfo', 'receiptNumber', 'submissionReceived', 'responseDue'
  ],
  _relationshipTypes: {
    'activityDetails': ActivityDetails,
    'titles': TitleList,
    'titleholderDetails': TitleholderDetails,
    'submissionContact': SubmissionContact,
    'liaisonContact': LiaisonContact,
    'activityContact': ActivityContact,
    'documents': EnvironmentPlanDocuments,
    'financialAssurance': FinancialAssurance,
    'additionalInfo': AdditionalInfo
  },
  id: null,
  type: 'new',
  activityDetails: null,
  titles: null,
  titleholderDetails: null,
  submissionContact: null,
  liaisonContact: null,
  activityContact: null,
  documents: null,
  financialAssurance: null,
  additionalInfo: null
});
