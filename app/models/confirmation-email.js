import Ember from 'ember';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: ['email'],
  email: null,
  errors: Ember.computed('email', function() {
    const errors = {};

    if (Ember.isBlank(this.get('email'))) {
      errors['email'] = 'Email must be specified';
    }

    const emailRegex = /.+@.+\..+/i;
    if (Ember.isPresent(this.get('email')) && !emailRegex.test(this.get('email'))) {
      errors['email'] = 'Please specify a valid email address';
    }

    return errors;
  })
});
