import Ember from 'ember';
import Serializable from '../mixins/serializable';
import TitleList from './title-list';
import TitleholderDetails from './titleholder-details';
import FinancialAssurance from './financial-assurance';

export default Ember.Object.extend(Serializable, {
  _serializableProperties: [
    'id', 'titles', 'titleholderDetails',
    'receiptNumber', 'submissionReceived', 'responseDue'
  ],
  _relationshipTypes: {
    'titles': TitleList,
    'titleholderDetails': TitleholderDetails
  },
  id: null,
  titles: null,
  titleholderDetails: null,
});
