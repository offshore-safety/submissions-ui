import Ember from 'ember';
import { countryFromCode } from '../helpers/country-from-code';

export default Ember.Component.extend({
  tagName: 'nop-address',
  readonly: false,
  countries: Ember.inject.service(),
  countryOptions: Ember.computed('countries', function() {
    return this.get('countries').all();
  }),
  allowPOBox: true,
  addressLabel: Ember.computed('allowPOBox', function() {
    return this.get('allowPOBox') ? 'Street / P.O. box address' : 'Street address';
  }),
  fullAddress: Ember.computed('address.street', 'address.locality', 'address.state', 'address.postcode', 'address.country', function() {
    const address = this.get('address');
    const hasAddress = address.street && address.locality && address.state && address.postcode && address.country;
    return hasAddress ? `${address.street}\r\n${address.locality} ${address.state} ${address.postcode}\r\n${countryFromCode([address.country])}` : '';
  })
});
