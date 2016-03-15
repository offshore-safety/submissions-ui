import Ember from 'ember';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';
import _ from 'lodash/lodash';
import Address from './address';

export default Ember.Object.extend(Errors, Serializable, Ember.Copyable, {
  _serializableProperties: [
    'street', 'locality', 'state', 'postcode', 'country', 'required'
  ],
  street: null,
  locality: null,
  state: null,
  postcode: null,
  country: 'AU',
  required: false,
  copy() {
    return Address.create().deserialize(this.serialize());
  },
  errors: Ember.computed('street', 'locality', 'state', 'postcode', 'country', 'required', function() {
    const errors = {};

    if (this.get('required')) {
      const fullAddressComponents = ['street', 'locality', 'state', 'postcode', 'country'];
      if (_.some(fullAddressComponents, (c) => Ember.isBlank(this.get(c)))) {
        errors['fullAddress'] = 'Required';
      }

      if (Ember.isBlank(this.get('street'))) {
        errors['street'] = 'Required';
      }

      if (Ember.isBlank(this.get('locality'))) {
        errors['locality'] = 'Required';
      }

      if (Ember.isBlank(this.get('state'))) {
        errors['state'] = 'Required';
      }

      if (Ember.isBlank(this.get('postcode'))) {
        errors['postcode'] = 'Required';
      }

      if (Ember.isBlank(this.get('country'))) {
        errors['country'] = 'Required';
      }
    }

    return errors;
  })
});
