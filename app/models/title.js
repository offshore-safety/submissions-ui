import DS from 'ember-data';

export default DS.Model.extend({
  titleOrApplicationNumber: DS.attr(),
  commonwealthWaters: DS.attr(),
  region: DS.attr(),
  titleList: DS.belongsTo('title-list', {async: false})
});
