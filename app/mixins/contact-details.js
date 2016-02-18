import Ember from 'ember';
import Errors from './errors';
import Address from '../models/address';
import Serializable from './serializable';

export default Ember.Mixin.create(Errors, Serializable, {
  _serializableProperties: [
    'title', 'firstName', 'lastName', 'position', 'employer', 'phone',
    'mobile', 'email', 'postalAddress', 'sameAsLiaison', 'sameAsActivity', 'visited'
  ],
  _relationshipTypes: {
    'postalAddress': Address
  },
  visited: false,
  title: null,
  firstName: null,
  lastName: null,
  position: null,
  employer: null,
  phone: null,
  mobile: null,
  email: null,
  postalAddress: null,
  sameAsLiaison: false,
  sameAsActivity: false,
  errors: Ember.computed('title', 'firstName', 'lastName', 'position', 'phone', 'mobile', 'email', 'postalAddress.errors', function() {
    const errors = {};

    if (Ember.isBlank(this.get('title')) || Ember.isBlank(this.get('firstName')) || Ember.isBlank(this.get('lastName'))) {
      errors['fullName'] = 'Title, first name and last name are all required';
    }

    if (Ember.isBlank(this.get('title'))) {
      errors['title'] = 'Title is required';
    }

    if (Ember.isBlank(this.get('firstName'))) {
      errors['firstName'] = 'First name is required';
    }

    if (Ember.isBlank(this.get('lastName'))) {
      errors['lastName'] = 'Last name is required';
    }

    if (Ember.isBlank(this.get('position'))) {
      errors['position'] = 'Position is required';
    }

    if (Ember.isBlank(this.get('phone')) && Ember.isBlank(this.get('mobile'))) {
      errors['phoneNumber'] = 'Either a landline or mobile number is required';
    }

    if (Ember.isBlank(this.get('email'))) {
      errors['email'] = 'Email address is required';
    }

    const emailRegex = /.+@.+\..+/i;
    if (Ember.isPresent(this.get('email')) && !emailRegex.test(this.get('email'))) {
      errors['email'] = 'Please specify a valid email address';
    }

    errors.postalAddress = this.get('postalAddress').get('errors');

    return errors;
  })
});
