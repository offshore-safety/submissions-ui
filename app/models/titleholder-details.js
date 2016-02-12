import DS from 'ember-data';
import Ember from 'ember';
import Errors from '../mixins/errors';

export default DS.Model.extend(Errors, {
  visited: DS.attr(),
  name: DS.attr(),
  abn: DS.attr(),
  acn: DS.attr(),
  businessAddress: DS.belongsTo('address', {async: false, embedded: 'always'}),
  postalAddress: DS.belongsTo('address', {async: false, embedded: 'always'}),
  errors: Ember.computed('name', 'abn', 'acn', 'businessAddress.errors', 'postalAddress.errors', function() {
    const errors = {}

    errors['businessAddress'] = this.get('businessAddress').get('errors');
    errors['postalAddress'] = this.get('postalAddress').get('errors');

    if (Ember.isBlank(this.get('name'))) {
      errors['name'] = 'A business name is required'
    }

    if (Ember.isPresent(this.get('abn')) && this.get('abn').length !== 11) {
      errors['abn'] = 'An ABN must be 11 digits long'
    }

    if (Ember.isPresent(this.get('acn')) && this.get('acn').length !== 9) {
      errors['acn'] = 'An ACN must be 9 digits long'
    }

    return errors;
  })
});
