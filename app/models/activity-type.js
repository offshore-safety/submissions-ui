import DS from 'ember-data';
import Ember from 'ember';
import Errors from '../mixins/errors';

export default DS.Model.extend(Errors, {
  type: DS.attr(),
  errors: Ember.computed('type', function() {
    const errors = {};

    if (Ember.isBlank(this.get('type'))) {
      errors['type'] = 'Type must be specified';
    }

    return errors;
  })
});
