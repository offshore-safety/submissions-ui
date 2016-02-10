import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
  tagName: 'nop-navigation-item',
  submissionStatus: Ember.inject.service(),
  classNameBindings: ['current', 'complete', 'errors'],
  visited: Ember.computed('submissionStatus.title-list', function () {
    return this.get('submissionStatus').visited(this.get('item').key);
  }),
  errors: Ember.computed('submissionStatus.title-list', function () {
    return this.get('submissionStatus').hasErrors(this.get('item').key);
  }),
  complete: Ember.computed('visited', 'errors', function() {
    return this.get('visited') && !this.get('errors');
  })
});
