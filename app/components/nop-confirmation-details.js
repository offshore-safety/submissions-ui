import Ember from 'ember';
import Constants from '../constants';

export default Ember.Component.extend({
  tagName: 'nop-confirmation-details',
  classNameBindings: ['readonly', 'visited'],
  visited: Ember.computed('confirmationDetails.visited', function() {
    return this.get('confirmationDetails').get('visited');
  }),
  selectedCalculationMethod: Ember.computed('confirmationDetails.calculationMethod', function() {
    return Constants.CONFIRMATION_METHODS[this.get('confirmationDetails').get('calculationMethod')];
  }),
  otherEndorsedType: Ember.computed('confirmationDetails.calculationMethod', function() {
    return this.get('confirmationDetails').get('calculationMethod') === 'calculationMethod2';
  })
});
