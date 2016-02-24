import _ from 'lodash/lodash';
import Ember from 'ember';
import numeral from 'numeral';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: ['name', 'description', 'descriptionRequired', 'token', 'size', 'preview'],
  name: null,
  description: null,
  descriptionRequired: false,
  token: null,
  preview: null,
  size: null,
  sizeFormatted: Ember.computed('size', function() {
    return numeral(this.get('size')).format('0b');
  }),
  extension: Ember.computed('name', function() {
    const name = this.get('name') || '';
    return _.last(name.split('.'));
  }),
  errors: Ember.computed('description', 'descriptionRequired', function() {
    const errors = {};
    if (Ember.isBlank(this.get('description')) && this.get('descriptionRequired')) {
      errors['description'] = 'Required';
    }
    return errors;
  })
});
