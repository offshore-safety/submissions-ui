import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-radio-group',
  classNameBindings: ['hint:has-hint'],
  errorMessage: Ember.computed('errors', 'errorKey', function() {
    if (this.get('errors') && this.get('errorKey')) {
      return this.get('errors')[this.get('errorKey')];
    }
  }),
  nonRequiredErrors: Ember.computed('errorMessage', function() {
    return this.get('errorMessage') !== 'Required' ? this.get('errorMessage') : null;
  })
});
