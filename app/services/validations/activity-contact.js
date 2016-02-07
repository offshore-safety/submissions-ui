import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Service.extend({
  contactValidator: Ember.inject.service('validations.contact-details'),
  validate(entity) {
    const errors = {};

    if (!entity.activityContact) {
      errors['activityContact'] = 'Please specify the activity contact for this submission';
    } else {
      _.merge(errors, this.get('contactValidator').validate(entity.activityContact, 'activityContact'));
    }

    return errors;
  }
});
