import Ember from 'ember';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: ['name', 'token'],
  name: null,
  token: null,
  errors: Ember.computed('name', 'token', function() {
    const errors = {};

    if (Ember.isBlank(this.get('name'))) {
      errors['name'] = 'The document name must be specified';
    }

    if (Ember.isBlank(this.get('token'))) {
      errors['token'] = 'You must upload a file';
    }

    return errors;
  })
});
