import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-titleholders',
  readonly: false,
  _initialiseTitleholders: function() {
    const submission = this.get('submission');
    if (!submission.titleholderDetails) {
      submission.titleholderDetails = {};
    }
  }.on('init'),
  actions: {
    addTitleholder() {
      this.get('submission').otherTitleholders.pushObject({});
    }
  }
});
