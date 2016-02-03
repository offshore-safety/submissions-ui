import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-titleholder-details',
  readonly: false,
  _initialiseTitleholder: function() {
    const titleholder = this.get('titleholder');
    if (!titleholder.businessAddress) {
      titleholder.businessAddress = {};
    }
    if (!titleholder.postalAddress) {
      titleholder.postalAddress = {};
    }
  }.on('init'),
});
