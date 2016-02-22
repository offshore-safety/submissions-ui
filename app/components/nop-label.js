import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-label',
  forElementId: null,
  name: null,
  label: null,
  errorMessage: null,
  requiredErrorMessage: Ember.computed('errorMessage', function() {
    return this.get('errorMessage') === 'Required' ? this.get('errorMessage') : null;
  })
});
