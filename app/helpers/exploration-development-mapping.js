import Ember from 'ember';

export function explorationDevelopmentMapping(params) {
  return params[0].toLowerCase();
}

export default Ember.Helper.helper(explorationDevelopmentMapping);
