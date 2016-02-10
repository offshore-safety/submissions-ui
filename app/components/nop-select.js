import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-select',
  errorMessage: Ember.computed('errors', 'errorKey', function() {
    if (this.get('errors') && this.get('errorKey')) {
      return this.get('errors')[this.get('errorKey')];
    }
  })
});
