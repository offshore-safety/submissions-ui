import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-activity-contact',
  readonly: false,
  _initialiseActivityContact: function() {
    const submission = this.get('submission');
    if (!submission.activityContact) {
      submission.activityContact = {};
    }
  }.on('init')
});