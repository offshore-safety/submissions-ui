import Ember from 'ember';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';
import ConfirmationEmail from './confirmation-email';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: [
    'comments', 'confirmationEmails'
  ],
  _relationshipTypes: {
    'confirmationEmails': ConfirmationEmail
  },
  comments: null,
  confirmationEmails: [],
  errors: Ember.computed('comments', 'confirmationEmails.@each.errors', function() {
    const errors = {};

    errors['confirmationEmails'] = this.get('confirmationEmails').map((ce) => ce.get('errors'));

    return errors;
  })
});
