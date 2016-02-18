import Ember from 'ember';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';
import Address from './address';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: [
    'name', 'abn', 'acn', 'businessAddress', 'postalAddress', 'visited'
  ],
  _relationshipTypes: {
    'businessAddress': Address,
    'postalAddress': Address
  },
  visited: false,
  name: null,
  abn: null,
  acn: null,
  businessAddress: null,
  postalAddress: null,
  errors: Ember.computed('name', 'abn', 'acn', 'businessAddress.errors', 'postalAddress.errors', function() {
    const errors = {};

    errors['businessAddress'] = this.get('businessAddress').get('errors');
    errors['postalAddress'] = this.get('postalAddress').get('errors');

    if (Ember.isBlank(this.get('name'))) {
      errors['name'] = 'A business name is required';
    }

    if (Ember.isPresent(this.get('abn')) && this.get('abn').length !== 11) {
      errors['abn'] = 'An ABN must be 11 digits long';
    }

    if (Ember.isPresent(this.get('acn')) && this.get('acn').length !== 9) {
      errors['acn'] = 'An ACN must be 9 digits long';
    }

    return errors;
  })
});
