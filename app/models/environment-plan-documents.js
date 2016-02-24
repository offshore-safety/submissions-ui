import Ember from 'ember';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';
import Document from './document';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: [
    'environmentPlan', 'attachments', 'reg31Documents', 'visited'
  ],
  _relationshipTypes: {
    'environmentPlan': Document,
    'attachments': Document
  },
  visited: false,
  environmentPlan: null,
  attachments: [],
  reg31Documents: null,
  errors: Ember.computed('environmentPlan.errors', 'attachments.@each.errors', 'reg31Documents', function() {
    const errors = {};

    if (!this.get('environmentPlan')) {
      errors['environmentPlan'] = 'Required';
    }
    errors['attachments'] = this.get('attachments').map((t) => t.get('errors'));

    return errors;
  })
});
