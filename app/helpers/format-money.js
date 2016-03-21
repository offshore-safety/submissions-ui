import Ember from 'ember';

export function formatMoney(params) {
  const formattedNumber = params[0].toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `$${formattedNumber}`;
}

export default Ember.Helper.helper(formatMoney);
