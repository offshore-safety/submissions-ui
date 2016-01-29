import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-titleholders',
  trueOrFalse: [
    {label: 'Yes', value: true},
    {label: 'No', value: false}
  ],
  _eligibleVoluntaryActionChanged: Ember.observer('submission.isEligibleVoluntaryAction', function() {
    if (this.get('submission').isEligibleVoluntaryAction) {
      Ember.set(this.get('submission'), 'otherTitleholders', []);
    }
  }),
  actions: {
    addTitleholder() {
      this.get('submission').otherTitleholders.pushObject({businessAddress: {}, postalAddress: {}});
    }
  }
});
