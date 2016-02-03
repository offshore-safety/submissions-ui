import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-titles',
  readonly: false,
  _initialiseTitles: function() {
    const submission = this.get('submission');
    if (!submission.titles) {
      submission.titles = [{}];
    }
  }.on('init'),
  actions: {
    addTitle() {
      this.get('submission').titles.pushObject({});
    }
  }
});
