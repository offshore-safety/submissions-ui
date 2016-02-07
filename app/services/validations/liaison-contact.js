import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Service.extend({
  contactValidator: Ember.inject.service('validations.contact-details'),
  validate(entity) {
    const errors = {};

    if (!entity.liaisonContact) {
      errors['liaisonContact'] = 'Please specify the Nominated Liaison Person for this submission';
    } else {
      _.merge(errors, this.get('contactValidator').validate(entity.liaisonContact, 'liaisonContact'));
    }

    return errors;
  }
});
