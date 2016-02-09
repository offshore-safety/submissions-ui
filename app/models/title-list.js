import DS from 'ember-data';

export default DS.Model.extend({
  visited: DS.attr(),
  titles: DS.hasMany('title', {async: false, embedded: 'always'}),
  errors: Ember.computed('titles.@each.errors', function() {
    return {titles: this.get('titles').map((t) => t.get('errors'))};
  })
});
