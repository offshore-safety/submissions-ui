import Ember from 'ember';

export function booleanToYesNo(params) {
  return params[0] === true ? 'Yes' : 'No';
}

export default Ember.Helper.helper(booleanToYesNo);
