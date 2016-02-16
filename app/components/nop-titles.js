import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-titles',
  classNameBindings: ['hasErrors', 'readonly'],
  readonly: false,
  multipleTitles: Ember.computed('titles.titles.length', function() {
    return this.get('titles').get('titles').length > 1;
  }),
  actions: {
    addTitle() {
      this.sendAction('addTitle');
    }
  }
});
