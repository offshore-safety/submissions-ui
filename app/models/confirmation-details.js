import Ember from 'ember';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: ['calculationMethod', 'epDocumentTitle', 'endorsementDate', 'visited'],
  calculationMethod: null,
  epDocumentTitle: null,
  endorsementDate: null,
  errors: Ember.computed('calculationMethod', 'endorsementDate', 'epDocumentTitle', function() {
    const errors = {};

    if (Ember.isBlank(this.get('calculationMethod'))) {
      errors['calculationMethod'] = 'Required';
    }

    if (Ember.isBlank(this.get('epDocumentTitle'))) {
      errors['epDocumentTitle'] = 'Required';
    }

    if (this.get('calculationMethod') === 'calculationMethod2') {
      if (Ember.isBlank(this.get('endorsementDate'))) {
        errors['endorsementDate'] = 'Required';
      }
    }

    return errors;
  })
});
