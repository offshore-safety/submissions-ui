import Ember from 'ember';
import Serializable from '../mixins/serializable';
import Errors from '../mixins/errors';
import TitleList from './title-list';
import TitleholderDetails from './titleholder-details';
import DeclarationOptions from './declaration-options';

export default Ember.Object.extend(Serializable, Errors, {
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
  declarationOptions: null,
  errors: Ember.computed('titles.errors', 'titleholderDetails.errors', 'declarationOptions.errors', function() {
    const errors = {};

    errors['titles'] = this.get('titles').get('errors');
    errors['titleholderDetails'] = this.get('titleholderDetails').get('errors');
    errors['declarationOptions'] = this.get('declarationOptions').get('errors');

    return errors;
  })
});
