import Ember from 'ember';
import Serializable from '../../mixins/serializable';
import Errors from '../../mixins/errors';
import TitleList from '../title-list';
import TitleholderDetails from '../titleholder-details';
import ConfirmationDetails from '../confirmation-details';

export default Ember.Object.extend(Serializable, Errors, {
  _serializableProperties: [
    'id', 'titles', 'titleholderDetails', 'confirmationDetails',
    'receiptNumber', 'submissionReceived', 'responseDue'
  ],
  _relationshipTypes: {
    'titles': TitleList,
    'titleholderDetails': TitleholderDetails,
    'confirmationDetails': ConfirmationDetails
  },
  id: null,
  titles: null,
  titleholderDetails: null,
  confirmationDetails: null,
  errors: Ember.computed('titles.errors', 'titleholderDetails.errors', 'confirmationDetails.errors', function() {
    const errors = {};

    errors['titles'] = this.get('titles').get('errors');
    errors['titleholderDetails'] = this.get('titleholderDetails').get('errors');
    errors['confirmationDetails'] = this.get('confirmationDetails').get('errors');

    return errors;
  })
});
