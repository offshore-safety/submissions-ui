import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-address',
  countries: Ember.inject.service(),
  countryOptions: Ember.computed('countries', function() {
    return this.get('countries').all();
  }),
  allowPOBox: true,
  addressLabel: Ember.computed('allowPOBox', function() {
    return this.get('allowPOBox') ? 'Street / PO Box Address' : 'Street Address';
  })
});
