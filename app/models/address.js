import Ember from 'ember';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: [
    'street', 'locality', 'state', 'postcode', 'country'
  ],
  street: null,
  locality: null,
  state: null,
  postcode: null,
  country: 'AU',
  errors: Ember.computed('street', 'locality', 'state', 'postcode', 'country',function() {
    const errors = {};

    if (Ember.isBlank(this.get('street'))) {
      errors['street'] = 'Address is required';
    }

    if (Ember.isBlank(this.get('locality'))) {
      errors['locality'] = 'Suburb/Locality is required';
    }

    if (Ember.isBlank(this.get('state'))) {
      errors['state'] = 'State required';
    }

    if (Ember.isBlank(this.get('postcode'))) {
      errors['postcode'] = 'Postcode required';
    }

    if (Ember.isBlank(this.get('country'))) {
      errors['country'] = 'Country required';
    }

    return errors;
  })
});
