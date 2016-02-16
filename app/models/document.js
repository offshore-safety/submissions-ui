import DS from 'ember-data';
import Ember from 'ember';
import Errors from '../mixins/errors';

export default DS.Model.extend(Errors, {
  name: DS.attr(),
  token: DS.attr(),
  errors: Ember.computed('name', 'token', function() {
    const errors = {};

    if (Ember.isBlank(this.get('name'))) {
      errors['name'] = 'The document name must be specified';
    }

    if (Ember.isBlank(this.get('token'))) {
      errors['token'] = 'You must upload a file';
    }

    return errors;
  })
});
