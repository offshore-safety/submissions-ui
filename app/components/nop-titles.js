import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
  tagName: 'nop-titles',
  classNameBindings: ['hasErrors'],
  readonly: false,
  validation: Ember.inject.service('validations.titles'),
  _initialiseTitles: function() {
    const submission = this.get('submission');
    if (!submission.titles) {
      submission.titles = [{}];
    }
  }.on('init'),
  _validate: function() {
    const errors = this.get('validation').validate(this.get('submission'));
    const keys = _.keys(errors);
    this.set('errors', errors);
    this.set('hasErrors', keys.length > 0);
  }.on('init'),
  actions: {
    addTitle() {
      this.get('submission').titles.pushObject({});
    }
  }
});
