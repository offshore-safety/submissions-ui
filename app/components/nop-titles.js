import Ember from 'ember';
import ComponentValidation from '../mixins/component-validation';

export default Ember.Component.extend({
  tagName: 'nop-titles',
  classNameBindings: ['hasErrors', 'readonly'],
  readonly: false,
  _visited: function() {
    this.get('titles').set('visited', true);
  }.on('init'),
  // validator: Ember.inject.service('validations.titles'),
  // _initialiseTitles: function() {
  //   const submission = this.get('submission');
  //   if (!submission.titles) {
  //     submission.titles = [{}];
  //   }
  // }.on('init'),
  actions: {
    addTitle() {
      this.sendAction('addTitle');
    }
  }
});
