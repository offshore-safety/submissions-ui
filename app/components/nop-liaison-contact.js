import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-liaison-contact',
  _initialiseActivityContact: function() {
    const submission = this.get('submission');
    if (!submission.liaisonContact) {
      submission.liaisonContact = {};
    }
  }.on('init')
});
