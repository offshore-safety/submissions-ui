import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Service.extend({
  validate(entity) {
    const errors = {};

    if (!entity.documents.environmentPlan || !entity.documents.environmentPlan.token) {
      errors['environmentPlan.token'] = 'An Environment Plan must be uploaded with your submission';
    } else {
      if (!entity.documents.environmentPlan.name) {
        errors['environmentPlan.name'] = 'The submitted Environment Plan document must have a name';
      }
    }

    return errors;
  }
});
