import Ember from 'ember';

export default Ember.Service.extend({
  validate(entity) {
    const errors = {};

    if (entity.documents && entity.documents.attachments) {
      entity.documents.attachments.forEach((a, index) => {
        if (a.token && Ember.isBlank(a.name)) {
          errors[`attachments.${index}.name`] = 'Attachments must have names';
        }
      });
    }

    return errors;
  }
});
