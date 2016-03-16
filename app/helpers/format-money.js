import Ember from 'ember';

export function formatMoney(params) {
  const formattedNumber = params[0].toFixed(0).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  return `$${formattedNumber}`;
}

export default Ember.Helper.helper(formatMoney);
