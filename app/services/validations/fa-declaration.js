import Ember from 'ember';

export default Ember.Service.extend({
  validate(entity) {
    const errors = {};

    if (entity.documents.faDeclaration.includeFa === undefined) {
      errors['faDeclaration.include'] = 'You must specify whether or not you are including an Financial Assurance Declaration with this submission';
    }

    return errors;
  }
});
