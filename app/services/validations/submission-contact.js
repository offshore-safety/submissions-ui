import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Service.extend({
  contactValidator: Ember.inject.service('validations.contact-details'),
  validate(entity) {
    const errors = {};

    if (!entity.submissionContact) {
      errors['submissionContact'] = 'Please specify the contact details for this submission';
    } else {
      _.merge(errors, this.get('contactValidator').validate(entity.submissionContact, 'submissionContact'));
    }

    return errors;
  }
});
