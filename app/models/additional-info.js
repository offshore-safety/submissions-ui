import DS from 'ember-data';
import Ember from 'ember';
import Errors from '../mixins/errors';

export default DS.Model.extend(Errors, {
  comments: DS.attr(),
  confirmationEmails: DS.hasMany('confirmation-email', {async: false}),
  errors: Ember.computed('comments', 'confirmationEmails.@each.errors', function() {
    const errors = {};

    errors['confirmationEmails'] = this.get('confirmationEmails').map((ce) => ce.get('errors'));

    return errors;
  })
});
