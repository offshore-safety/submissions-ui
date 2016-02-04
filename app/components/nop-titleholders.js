import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
  tagName: 'nop-titleholders',
  classNameBindings: ['hasErrors'],
  readonly: false,
  validation: Ember.inject.service('validations.titleholder-details'),
  _initialiseTitleholders: function() {
    const submission = this.get('submission');
    if (!submission.titleholderDetails) {
      submission.titleholderDetails = {};
    }
  }.on('init'),
  _validate: function() {
    const errors = this.get('validation').validate(this.get('submission'));
    const keys = _.keys(errors);
    this.set('errors', errors);
    this.set('errorMessages', keys.map((k) => `${errors[k]}`));
    this.set('hasErrors', keys.length > 0);
  }.on('init'),
  actions: {
    addTitleholder() {
      this.get('submission').otherTitleholders.pushObject({});
    }
  }
});
