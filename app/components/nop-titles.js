import Ember from 'ember';
import ComponentValidation from '../mixins/component-validation';

export default Ember.Component.extend(ComponentValidation, {
  tagName: 'nop-titles',
  classNameBindings: ['hasErrors', 'readonly'],
  readonly: false,
  validator: Ember.inject.service('validations.titles'),
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
  },
  multipleTitles: Ember.computed('submission.titles.length', function() {
    return this.get('submission').titles.length > 1;
  })
});
