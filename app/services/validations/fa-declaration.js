import Ember from 'ember';

export default Ember.Service.extend({
  validate(entity) {
    const errors = {};

    if (!entity.documents || entity.documents.faDeclaration.includeFa === undefined) {
      errors['faDeclaration.include'] = 'You must specify whether or not you are including an Financial Assurance Declaration with this submission';
    } else {
      if (entity.documents.faDeclaration.includeFa) {
        if (!entity.documents.faDeclaration.token) {
          errors['faDeclaration.token'] = 'You must upload the Financial Assurance Declaration document if including with this submission';
        }
      }
    }

    return errors;
  }
});
