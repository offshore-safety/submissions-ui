import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-confirmation-details',
  classNameBindings: ['readonly', 'visited'],
  visited: Ember.computed('confirmationDetails.visited', function() {
    return this.get('confirmationDetails').get('visited');
  }),
  otherEndorsedType: Ember.computed('confirmationDetails.calculationMethod', function() {
    return this.get('confirmationDetails').get('calculationMethod') === 'calculationMethod2';
  })
});
