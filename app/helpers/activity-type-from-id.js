import Ember from 'ember';
import _ from 'lodash/lodash';
import Constants from '../constants';

export function activityTypeFromId(params) {
  return _.merge(Constants.PETROLEUM_ACTIVITY_TYPES, Constants.GREENHOUSE_GAS_ACTIVITY_TYPES)[params[0]];
}

export default Ember.Helper.helper(activityTypeFromId);
