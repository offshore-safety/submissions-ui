import Ember from 'ember';
import DS from 'ember-data';
import Errors from './errors';

export default Ember.Mixin.create(Errors, {
  title: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  position: DS.attr(),
  employer: DS.attr(),
  phone: DS.attr(),
  mobile: DS.attr(),
  email: DS.attr(),
  postalAddress: DS.belongsTo('address', {async: false}),
  sameAsLiaison: DS.attr('boolean', {defaultValue: true}),
  sameAsActivity: DS.attr('boolean', {defaultValue: false}),
  errors: Ember.computed('title', 'firstName', 'lastName', 'phone', 'mobile', 'email', 'postalAddress.errors', function() {
    const errors = {};

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
