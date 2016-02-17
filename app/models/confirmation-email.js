import DS from 'ember-data';
import Ember from 'ember';
import Errors from '../mixins/errors';

export default DS.Model.extend(Errors, {
  email: DS.attr(),
  errors: Ember.computed('email', function() {
    const errors = {};

    if (Ember.isBlank(this.get('email'))) {
      errors['email'] = 'Email must be specified';
    }

    return errors;
  })
});
