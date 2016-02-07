import Ember from 'ember';
import ComponentValidation from '../mixins/component-validation';

export default Ember.Component.extend(ComponentValidation, {
  tagName: 'nop-activity-contact',
  validator: Ember.inject.service('validations.activity-contact'),
  readonly: false,
  _initialiseActivityContact: function() {
    const submission = this.get('submission');
    if (!submission.activityContact) {
      submission.activityContact = {};
    }
  }.on('init')
});
