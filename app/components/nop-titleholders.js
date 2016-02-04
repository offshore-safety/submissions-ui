import Ember from 'ember';
import ComponentValidation from '../mixins/component-validation';

export default Ember.Component.extend(ComponentValidation, {
  tagName: 'nop-titleholders',
  classNameBindings: ['hasErrors'],
  readonly: false,
  validator: Ember.inject.service('validations.titleholder-details'),
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
