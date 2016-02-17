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
      errors['previousDeclaration'] = 'You must specify whether you have previously submitted an FA Declaration';
    } else {
      if (this.get('previousDeclaration') === false) {
        if (Ember.isBlank(this.get('includeDeclaration'))) {
          errors['includeDeclaration'] = 'You must specify whether you are going to provide an FA Declaration with this submission';
        }
      }
    }

    if (Ember.isBlank(this.get('includeConfirmation'))) {
      errors['includeConfirmation'] = 'You must specify whether you are going to provide an FA Confirmation with this submission';
    }

    return errors;
  })
});
