import Ember from 'ember';

export default Ember.Controller.extend({
  trueOrFalse: [
    {label: 'Yes', value: true},
    {label: 'No', value: false}
  ],
  _eligibleVoluntaryActionChanged: Ember.observer('model.isEligibleVoluntaryAction', function() {
    if (this.get('model').isEligibleVoluntaryAction) {
      Ember.set(this.get('model'), 'otherTitleholders', []);
    }
  }),
  actions: {
    addTitleholder() {
      this.get('model').otherTitleholders.pushObject({});
    },
    goNext() {
      this.transitionToRoute('environment-plan.new.submission-contact');
    },
    goBack() {
      this.transitionToRoute('environment-plan.new.titles');
    }
  }
});
