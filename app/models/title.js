import DS from 'ember-data';

export default DS.Model.extend({
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
      errors['commonwealthWaters'] = 'Commonwealth waters closest to required';
    }

    if (Ember.isBlank(this.get('region'))) {
      errors['region'] = 'Region required';
    }

    return errors;
  })
});
