import Ember from 'ember';
import Constants from '../constants';

export function regulationTypeFromId(params) {
  return Constants.REGULATION_TYPES[params[0]];
}

export default Ember.Helper.helper(regulationTypeFromId);
