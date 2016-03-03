import Ember from 'ember';

export default Ember.Controller.extend({
  showSignatures: Ember.computed('calculationType', function() {
    return Ember.isPresent(this.get('calculationType'));
  }),
  otherEndorsedType: Ember.computed('calculationType', function() {
    return this.get('calculationType') === 'b';
  }),
  showPrint: Ember.computed('showSignatures', function() {
    return !this.get('model').get('titles').get('hasErrors') &&
           !this.get('model').get('titleholderDetails').get('hasErrors') &&
           !this.get('model').get('submissionContact').get('hasErrors') &&
           this.get('showSignatures');
  }),
  submitterName: Ember.computed('model.firstName', 'model.lastName', function() {
    const firstName = this.get('model').get('submissionContact').get('firstName');
    const lastName = this.get('model').get('submissionContact').get('lastName');
    return `${firstName} ${lastName}`;
  }),
  actions: {
    print() {
      window.print();
    }
  }
});
