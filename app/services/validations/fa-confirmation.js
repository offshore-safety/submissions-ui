import Ember from 'ember';

export default Ember.Service.extend({
  validate(entity) {
    const errors = {};

    if (!entity.documents || entity.documents.faConfirmation.includeFa === undefined) {
      errors['faConfirmation.include'] = 'You must specify whether or not you are including an Financial Assurance Confirmation with this submission';
    } else {
      if (entity.documents.faConfirmation.includeFa) {
        if (!entity.documents.faConfirmation.token) {
          errors['faConfirmation.token'] = 'You must upload the Financial Assurance Confirmation document if including with this submission';
        }
      }
    }

    return errors;
  }
});
