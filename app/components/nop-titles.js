import Ember from 'ember';
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
  actions: {
    addTitle() {
      const titles = this.get('titles').get('titles');
      const firstTitle = titles[0];
      const newTitle = Title.create().copyLocationFrom(firstTitle);
      this.get('titles').get('titles').pushObject(newTitle);
    },
    removeTitle(title) {
      this.get('titles').get('titles').removeObject(title);
    },
    linkedTypesChanged() {
      console.log('Changed');
    }
  }
});
