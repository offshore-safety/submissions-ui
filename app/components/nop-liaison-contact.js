import Ember from 'ember';
import ComponentValidation from '../mixins/component-validation';

export default Ember.Component.extend(ComponentValidation, {
  tagName: 'nop-liaison-contact',
  validator: Ember.inject.service('validations.liaison-contact'),
  readonly: false,
  _initialiseLiaisonContact: function() {
    const submission = this.get('submission');
    if (!submission.liaisonContact) {
      submission.liaisonContact = {};
    }
  }.on('init')
});
