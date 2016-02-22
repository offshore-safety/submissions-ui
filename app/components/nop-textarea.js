import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-textarea',
  classNameBindings: ['hint:has-hint', 'errorMessage:errors'],
  errorMessage: Ember.computed('errors', 'errorKey', function() {
    if (this.get('errors') && this.get('errorKey')) {
      return this.get('errors')[this.get('errorKey')];
    }
  }),
  nonRequiredErrors: Ember.computed('errorMessage', function() {
    return this.get('errorMessage') !== 'Required' ? this.get('errorMessage') : null;
  }) 
});
