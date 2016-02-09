import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
  tagName: 'nop-navigation-item',
  submissionStatus: Ember.inject.service(),
  classNameBindings: ['current', 'complete', 'errors'],
  link: Ember.computed('item', function() {
    return this.get('item').paths[0];
  }),
  complete: Ember.computed('submissionStatus.title-list', function () {
    return this.get('submissionStatus').isComplete('title-list');
  }),
  errors: Ember.computed('submissionStatus.title-list', function () {
    return this.get('submissionStatus').hasErrors('title-list');
  })
});
