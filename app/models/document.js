import Ember from 'ember';
import numeral from 'numeral';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: ['name', 'token', 'extension', 'size'],
  name: null,
  token: null,
  extension: null,
  size: null,
  sizeFormatted: Ember.computed('size', function() {
    return numeral(this.get('size')).format('0b');
  }),
  errors: Ember.computed('name', 'token', function() {
    const errors = {};

    if (Ember.isBlank(this.get('name'))) {
      errors['name'] = 'Required';
    }

    if (Ember.isBlank(this.get('token'))) {
      errors['token'] = 'Required';
    }

    return errors;
  })
});
