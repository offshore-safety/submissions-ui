import Ember from 'ember';
import Constants from '../constants';

export function countryFromCode(params) {
  return Constants.COUNTRIES[params[0]];
}

export default Ember.Helper.helper(countryFromCode);
