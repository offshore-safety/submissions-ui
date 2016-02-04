import Ember from 'ember';

export default Ember.Service.extend({
  validate(entity) {
    const errors = {};

    if (entity.documents.faConfirmation.includeFa === undefined) {
      errors['faConfirmation.include'] = 'You must specify whether or not you are including an Financial Assurance Confirmation with this submission';
    }

    return errors;
  }
});
