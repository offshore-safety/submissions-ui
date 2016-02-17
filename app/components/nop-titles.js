import Ember from 'ember';

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
      const newTitle = this.get('store').createRecord('title');
      newTitle.save();
      this.get('titles').get('titles').pushObject(newTitle);
    }
  }
});
