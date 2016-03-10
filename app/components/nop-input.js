import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  tagName: 'nop-input',
  classNameBindings: ['hint:has-hint', 'errorMessage:errors', 'visited'],
  errorMessage: Ember.computed('errors', 'errorKey', function() {
    if (this.get('errors') && this.get('errorKey')) {
      return this.get('errors')[this.get('errorKey')];
    }
  }),
  nonRequiredErrors: Ember.computed('errorMessage', function() {
    return this.get('errorMessage') !== 'Required' ? this.get('errorMessage') : null;
  }),
  inputId: Ember.computed('elementId', 'name', function() {
    return `${this.get('elementId')}-${this.get('name') || ''}`;
  }),
  _registerForBlur: function() {
    const self = this;
    $(`#${this.get('inputId')}`).on('blur', function() {
      self.set('visited', true);
    });
  }.on('didInsertElement')
});
