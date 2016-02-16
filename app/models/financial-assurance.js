import DS from 'ember-data';
import Ember from 'ember';
import Errors from '../mixins/errors';

export default DS.Model.extend(Errors, {
  previousDeclaration: DS.attr(),
  includeDeclaration: DS.attr(),
  faDeclaration: DS.belongsTo('document', {async: false}),
  includeConfirmation: DS.attr(),
  faConfirmation: DS.belongsTo('document', {async: false}),
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
