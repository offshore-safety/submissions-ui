import Ember from 'ember';
import _ from 'lodash/lodash';
import Title from '../models/title';

export default Ember.Component.extend({
  tagName: 'nop-titles',
  store: Ember.inject.service(),
  classNameBindings: ['hasErrors', 'readonly', 'visited'],
  visited: Ember.computed('titles.visited', function() {
    return this.get('titles').get('visited');
  }),
  readonly: false,
  multipleTitles: Ember.computed('titles.titles.length', function() {
    return this.get('titles').get('titles').length > 1;
  }),
  showLevies: Ember.computed('activityTypes', 'activityTypes.@each.type', function() {
    return Ember.isPresent(this.get('activityTypes')) && _.all(this.get('activityTypes'), (at) => at.type);
  }),
  actions: {
    addTitle() {
      const titles = this.get('titles').get('titles');
      const firstTitle = titles[0];
      const newTitle = Title.create().copyLocationFrom(firstTitle);
      this.get('titles').get('titles').pushObject(newTitle);
    },
    removeTitle(title) {
      this.get('titles').get('titles').removeObject(title);
    }
  }
});
