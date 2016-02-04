import Ember from 'ember';

export default Ember.Service.extend({
  validate(entity) {
    const errors = {};

    entity.documents.attachments.forEach((a, index) => {
      if (a.token && !a.name) {
        errors[`attachments.${index}.name`] = 'Attachments must have names';
      }
    });

    return errors;
  }
});
