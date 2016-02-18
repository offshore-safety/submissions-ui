import Ember from 'ember';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: ['type'],
  type: null,
  errors: Ember.computed('type', function() {
    const errors = {};

    if (Ember.isBlank(this.get('type'))) {
      errors['type'] = 'You must specify an activity type';
    }

    return errors;
  })
});
