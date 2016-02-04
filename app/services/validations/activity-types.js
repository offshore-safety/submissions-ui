import Ember from 'ember';

export default Ember.Service.extend({
  validate(entity) {
    const errors = {};

    if (entity.activityTypes === undefined || entity.activityTypes.length < 1 || entity.activityTypes[0].type === undefined) {
      errors['activityTypes'] = 'At least one activity type must be specified';
    }

    return errors;
  }
});
