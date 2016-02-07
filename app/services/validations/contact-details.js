import Ember from 'ember';

export default Ember.Service.extend({
  validate(contact, prefix) {
    const errors = {};

    if (contact.title === undefined || contact.title === '') {
      errors[`${prefix}.title`] = 'You must specify a title';
    }

    if (contact.firstName === undefined || contact.firstName === '') {
      errors[`${prefix}.firstName`] = 'You must specify a first name';
    }

    if (contact.lastName === undefined || contact.lastName === '') {
      errors[`${prefix}.lastName`] = 'You must specify a last name';
    }

    const hasPhone = !(contact.phone === undefined || contact.phone === '');
    const hasMobile = !(contact.mobile === undefined || contact.mobile === '');
    if (!(hasPhone || hasMobile)) {
      errors[`${prefix}.phone`] = 'You must specify either a phone or mobile number';
    }

    if (contact.email === undefined || contact.email === '') {
      errors[`${prefix}.email`] = 'You must specify an email address';
    }

    return errors;
  }
});
