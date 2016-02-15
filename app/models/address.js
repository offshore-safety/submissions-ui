import DS from 'ember-data';
import Ember from 'ember';
import Errors from '../mixins/errors';

export default DS.Model.extend(Errors, {
  street: DS.attr(),
  locality: DS.attr(),
  state: DS.attr(),
  postcode: DS.attr(),
  country: DS.attr({defaultValue: 'AU'}),
  errors: Ember.computed('street', 'locality', 'state', 'postcode', 'country',function() {
    const errors = {};

    if (Ember.isBlank(this.get('street'))) {
      errors['street'] = 'Address is required';
    }

    if (Ember.isBlank(this.get('locality'))) {
      errors['locality'] = 'Suburb/Locality is required';
    }

    if (Ember.isBlank(this.get('state'))) {
      errors['state'] = 'State required';
    }

    if (Ember.isBlank(this.get('postcode'))) {
      errors['postcode'] = 'Postcode required';
    }

    if (Ember.isBlank(this.get('country'))) {
      errors['country'] = 'Country required';
    }

    return errors;
  })
});
