import Ember from 'ember';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: [
    'revisionType', 'visited'
  ],
  visited: false,
  revisionType: null,
  errors: Ember.computed('revisionType', function() {
    const errors = {};

    if (Ember.isBlank(this.get('revisionType'))) {
      errors['revisionType'] = 'Required';
    }

    return errors;
  })
});
