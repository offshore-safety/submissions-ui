import Ember from 'ember';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';
import Document from './document';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: [
    'attachment', 'visited'
  ],
  _relationshipTypes: {
    'attachment': Document,
  },
  visited: false,
  attachment: null,
  errors: Ember.computed('attachment.errors', function() {
    const errors = {};

    if (!this.get('attachment')) {
      errors['attachment'] = 'Required';
    }

    return errors;
  })
});
