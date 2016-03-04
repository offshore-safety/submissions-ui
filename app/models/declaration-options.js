import Ember from 'ember';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: ['declarationOption', 'signatoryType'],
  declarationOption: null,
  signatoryType: null,
  errors: Ember.computed('declarationOption', 'signatoryType', function() {
    const errors = {};

    if (Ember.isBlank(this.get('declarationOption'))) {
      errors['declarationOption'] = 'Required';
    }

    if (Ember.isBlank(this.get('signatoryType'))) {
      errors['signatoryType'] = 'Required';
    }

    return errors;
  })
});
