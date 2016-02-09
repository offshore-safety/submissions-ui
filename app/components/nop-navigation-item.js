import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
  tagName: 'nop-navigation-item',
  classNameBindings: ['current', 'complete'],
  submissionStore: Ember.inject.service(),
  validations: Ember.inject.service(),
  router: null,
  link: Ember.computed('item', function() {
    return this.get('item').paths[0];
  }),
  _matchingRoute() {
    const router = this.get('router');
    return _.contains(this.get('item').paths, router.get('currentRouteName'));
  },
  _updateCurrent() {
    this.set('current', this._matchingRoute());
  },
  _updateComplete() {
    const errors = {};
    // this.get('item').validators.forEach((v) => {
    //   const service = this.get('validations').get(v);
    //   _.merge(errors, service.validate(this.get('submissionStore').retrieve()));
    // });

    this.set('complete', _.keys(errors).length === 0);
  },
  _initialiseState: function() {
    this._updateCurrent();
    this._updateComplete();
  }.on('init'),
  _routeChanged: Ember.observer('router.currentRouteName', function() {
    this._updateComplete();
    this._updateCurrent();
  })
});
