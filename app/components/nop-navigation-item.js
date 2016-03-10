import Ember from 'ember';
import NavigationControl from '../mixins/navigation-control';

export default Ember.Component.extend(NavigationControl, {
  init () {
    const keyName = this.get('item').key;
    this.set('visited', Ember.computed(`model.${keyName}.visited`, function () {
      const pageModel = this.get('model').get(keyName);
      return pageModel ? pageModel.get('visited') : false;
    }));
    this.set('errors', Ember.computed(`model.${keyName}.hasErrors`, function() {
      const pageModel = this.get('model').get(keyName);
      return pageModel ? pageModel.get('hasErrors') : false;
    }));
    this._super(...arguments);
  },
  tagName: 'nop-navigation-item',
  submissionStatus: Ember.inject.service(),
  classNameBindings: ['current', 'complete', 'errors', 'inverted'],
  current: Ember.computed('submissionStatus.currentRoute', function() {
    return this.get('submissionStatus').get('currentRoute') === this.get('item').path;
  }),
  visitedWithErrors: Ember.computed('visited', 'errors', function() {
    return this.get('visited') && this.get('errors');
  }),
  complete: Ember.computed('visited', 'errors', function() {
    return this.get('visited') && !this.get('errors');
  }),
  inverted: Ember.computed('item', function() {
    return this.get('item').inverted;
  })
});
