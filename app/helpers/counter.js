import Ember from 'ember';

export function counter(index) {
  return parseInt(index) + 1;
}

export default Ember.Helper.helper(counter);
