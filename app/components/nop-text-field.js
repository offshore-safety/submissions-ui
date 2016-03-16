import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-text-field',
  valueLines: Ember.computed('value', function() {
    if(this.get('value')) {
      return this.get('value').toString().split('\r\n');
    }
  }),
  errorMessage: Ember.computed('errors', 'errorKey', function() {
    if (this.get('errors') && this.get('errorKey')) {
      return this.get('errors')[this.get('errorKey')];
    }
  })
});
