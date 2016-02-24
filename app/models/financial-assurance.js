import Ember from 'ember';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';
import Document from './document';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: [
    'previousDeclaration', 'includeDeclaration', 'faDeclaration', 'includeConfirmation', 'faConfirmation', 'visited'
  ],
  _relationshipTypes: {
    'faDeclaration': Document,
    'faConfirmation': Document
  },
  _previousChanged: Ember.observer('previousDeclaration', function() {
    if (this.get('previousDeclaration') === true) {
      this.set('includeDeclaration', null);
    }
  }),
  visited: false,
  previousDeclaration: null,
  includeDeclaration: null,
  faDeclaration: null,
  includeConfirmation: null,
  faConfirmation: null,
  errors: Ember.computed('previousDeclaration', 'includeDeclaration', 'faDeclaration.errors', 'includeConfirmation', 'faConfirmation.errors', function() {
    const errors = {};

    if (Ember.isBlank(this.get('previousDeclaration'))) {
      errors['previousDeclaration'] = 'Required';
    } else {
      if (this.get('previousDeclaration') === false) {
        if (Ember.isBlank(this.get('includeDeclaration'))) {
          errors['includeDeclaration'] = 'Required';
        }
      }
    }

    if (Ember.isBlank(this.get('includeConfirmation'))) {
      errors['includeConfirmation'] = 'Required';
    }

    if (!this.get('faDeclaration') && this.get('includeDeclaration')) {
      errors['faDeclaration'] = 'Required';
    }

    if (!this.get('faConfirmation') && this.get('includeConfirmation')) {
      errors['faConfirmation'] = 'Required';
    }

    return errors;
  })
});
