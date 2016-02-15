import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-titles',
  classNameBindings: ['hasErrors', 'readonly'],
  readonly: false,
  actions: {
    addTitle() {
      this.sendAction('addTitle');
    }
  },
  multipleTitles: Ember.computed('submission.titles.length', function() {
    return this.get('submission').titles.length > 1;
  })
});
