import DS from 'ember-data';

export default DS.Model.extend({
  visited: DS.attr(),
  titles: DS.hasMany('title', {async: false})
});
