import Ember from 'ember';

export default Ember.Service.extend({
  validate(contact, prefix) {
    const errors = {};

    if (Ember.isBlank(contact.title)) {
      errors[`${prefix}.title`] = 'You must specify a title';
    }

    if (Ember.isBlank(contact.firstName)) {
      errors[`${prefix}.firstName`] = 'You must specify a first name';
    }

    if (Ember.isBlank(contact.lastName)) {
      errors[`${prefix}.lastName`] = 'You must specify a last name';
    }

    const hasPhone = !Ember.isBlank(contact.phone);
    const hasMobile = !Ember.isBlank(contact.mobile);
    if (!(hasPhone || hasMobile)) {
      errors[`${prefix}.phone`] = 'You must specify either a phone or mobile number';
    }

    if (Ember.isBlank(contact.email)) {
      errors[`${prefix}.email`] = 'You must specify an email address';
    }

    return errors;
  }
});
