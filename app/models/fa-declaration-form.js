import Ember from 'ember';
import Serializable from '../mixins/serializable';
import TitleList from './title-list';
import TitleholderDetails from './titleholder-details';
import DeclarationOptions from './declaration-options';

export default Ember.Object.extend(Serializable, {
  _serializableProperties: [
    'id', 'titles', 'titleholderDetails', 'declarationOptions',
    'receiptNumber', 'submissionReceived', 'responseDue'
  ],
  _relationshipTypes: {
    'titles': TitleList,
    'titleholderDetails': TitleholderDetails,
    'declarationOptions': DeclarationOptions
  },
  id: null,
  titles: null,
  titleholderDetails: null,
  declarationOptions: null
});
