import Ember from 'ember';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';
import Document from './document';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: [
    'environmentPlan', 'attachments', 'reg31Documents'
  ],
  _relationshipTypes: {
    'environmentPlan': Document,
    'attachments': Document
  },
  environmentPlan: null,
  attachments: [],
  reg31Documents: null,
  errors: Ember.computed('environmentPlan.errors', 'attachments.@each.errors', 'reg31Documents', function() {
    const errors = {};

    errors.environmentPlan = this.get('environmentPlan').get('errors');

    errors.attachments = this.get('attachments').map((attachment) => attachment.get('errors'));

    return errors;
  })
});
