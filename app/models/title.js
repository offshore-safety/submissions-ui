import DS from 'ember-data';
import Ember from 'ember';
import Errors from '../mixins/errors';

export default DS.Model.extend(Errors, {
  titleOrApplicationNumber: DS.attr(),
  commonwealthWaters: DS.attr(),
  region: DS.attr(),
  titleList: DS.belongsTo('title-list', {async: false, embedded: 'always'}),
  errors: Ember.computed('titleOrApplicationNumber', 'commonwealthWaters', 'region', function() {
    const errors = {}

    if (Ember.isBlank(this.get('titleOrApplicationNumber'))) {
      errors['titleOrApplicationNumber'] = 'Title or application number required';
    }

    if (Ember.isBlank(this.get('commonwealthWaters'))) {
      errors['commonwealthWaters'] = 'Commonwealth waters adjacent to required';
    }

    if (Ember.isBlank(this.get('region'))) {
      errors['region'] = 'Region required';
    }

    return errors;
  })
});
