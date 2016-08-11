import Ember from 'ember';
import Serializable from '../../mixins/serializable';
import Errors from '../../mixins/errors';
import ActivityDetails from '../activity-details';
import TitleList from '../title-list';
import TitleholderDetails from '../titleholder-details';
import SubmissionContact from '../submission-contact';
import LiaisonContact from '../liaison-contact';
import ActivityContact from '../activity-contact';
import EnvironmentPlanDocuments from '../environment-plan-documents';
import FinancialAssurance from '../financial-assurance';
import AdditionalInfo from '../additional-info';
import Levies from '../levies';

export default Ember.Object.extend(Serializable, Errors, {
  _serializableProperties: [
    'id', 'type', 'activityDetails', 'titles', 'titleholderDetails', 'submissionContact', 'liaisonContact', 'activityContact',
    'documents', 'financialAssurance', 'additionalInfo', 'receiptNumber', 'submissionReceived', 'responseDue', 'levies'
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
    'additionalInfo': AdditionalInfo,
    'levies': Levies
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
  additionalInfo: null,
  levies: null,
  errors: Ember.computed('activityDetails.errors', 'titles.errors', 'titleholderDetails.errors', 'submissionContact.errors', 'liaisonContact.errors',
                         'activityContact.errors', 'documents.errors', 'financialAssurance.errors', 'additionalInfo.errors', function() {
    const errors = {};

    errors['activityDetails'] = this.get('activityDetails').get('errors');
    errors['titles'] = this.get('titles').get('errors');
    errors['titleholderDetails'] = this.get('titleholderDetails').get('errors');
    errors['submissionContact'] = this.get('submissionContact').get('errors');
    errors['liaisonContact'] = this.get('liaisonContact').get('errors');
    errors['activityContact'] = this.get('activityContact').get('errors');
    errors['documents'] = this.get('documents').get('errors');
    errors['financialAssurance'] = this.get('financialAssurance').get('errors');
    errors['additionalInfo'] = this.get('additionalInfo').get('errors');

    return errors;
  })
});
