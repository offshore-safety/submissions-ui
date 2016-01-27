import Ember from 'ember';

export default Ember.Service.extend({
  validate(entity) {
    const errors = {};

    if (entity.name === undefined || entity.name.length < 3) {
      errors['name'] = 'Activity name must be specified';
    }

    if (entity.description === undefined || entity.description.split(' ').length > 100) {
      errors['description'] = 'Activity description must be specified and more than 100 words';
    }

    if (entity.regulationType === undefined) {
      errors['regulationType'] = 'The type of activity being undertaken must be specified';
    }

    if (!entity.documents || !entity.documents.locationMap || !entity.documents.locationMap.token) {
      errors['documents.locationMap.token'] = 'A location map is required for your submission';
    }

    return errors;
  }
});
