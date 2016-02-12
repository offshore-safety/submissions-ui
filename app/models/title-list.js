import DS from 'ember-data';
import Ember from 'ember';
import Errors from '../mixins/errors';

export default DS.Model.extend(Errors, {
  visited: DS.attr(),
  titles: DS.hasMany('title', {embedded: 'always'}),
  errors: Ember.computed('titles.@each.errors', function() {
    return {titles: this.get('titles').map((t) => t.get('errors'))};
  })
});
