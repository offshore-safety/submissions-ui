import Ember from 'ember';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: [
    'titleOrApplicationNumber', 'commonwealthWaters', 'region'
  ],
  titleOrApplicationNumber: null,
  commonwealthWaters: null,
  region: null,
  errors: Ember.computed('titleOrApplicationNumber', 'commonwealthWaters', 'region', function() {
    const errors = {};

    if (Ember.isBlank(this.get('titleOrApplicationNumber'))) {
      errors['titleOrApplicationNumber'] = 'Required';
    }

    if (Ember.isBlank(this.get('commonwealthWaters'))) {
      errors['commonwealthWaters'] = 'Required';
    }

    if (Ember.isBlank(this.get('region'))) {
      errors['region'] = 'Required';
    }

    return errors;
  })
});
