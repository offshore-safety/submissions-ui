import Ember from 'ember';
import Constants from '../constants';

export function explorationDevelopmentMapping(params) {
  return Constants.EXPLORATION_DEVELOPMENT_OPTIONS[params[0]];
}

export default Ember.Helper.helper(explorationDevelopmentMapping);
