import Ember from 'ember';

export default Ember.Controller.extend({
  trueOrFalse: [
    {label: 'Yes', value: true},
    {label: 'No', value: false}
  ],
  eligibleVoluntaryActionChanged: Ember.observer('model.eligibleVoluntaryAction', function() {
    Ember.set(this.get('model'), 'otherTitleholders', []);
  }),
  actions: {
    addTitleholder() {
      this.get('model').otherTitleholders.pushObject({});
    }
  }
});
