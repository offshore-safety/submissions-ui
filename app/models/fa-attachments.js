import Ember from 'ember';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';
import Document from './document';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: [
    'attachments', 'visited'
  ],
  _relationshipTypes: {
    'attachments': Document,
  },
  visited: false,
  attachments: [],
  errors: Ember.computed('attachments.@each.errors', function() {
    const errors = {};

    if (Ember.isBlank(this.get('attachments'))) {
      errors['attachments'] = 'Required';
    } else {
      errors['attachments'] = this.get('attachments').map((t) => t.get('errors'));
    }

    return errors;
  })
});
