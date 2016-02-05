import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
  tagName: 'nop-navigation-item',
  classNameBindings: ['current'],
  router: null,
  link: Ember.computed('item', function() {
    return this.get('item').paths[0];
  }),
  _updateCurrent() {
    const router = this.get('router');
    const current = _.contains(this.get('item').paths, router.get('currentRouteName'));
    this.set('current', current);
  },
  _initialiseCurrent: function() {
    this._updateCurrent();
  }.on('init'),
  _routeChanged: Ember.observer('router.currentRouteName', function() {
    this._updateCurrent();
  })
});
