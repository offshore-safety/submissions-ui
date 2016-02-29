import Ember from 'ember';

export default Ember.Controller.extend({
  showSignatures: Ember.computed('calculationType', function() {
    return Ember.isPresent(this.get('calculationType'));
  }),
  otherEndorsedType: Ember.computed('calculationType', function() {
    return this.get('calculationType') === 'b';
  }),
  showPrint: Ember.computed('showSignatures', function() {
    return this.get('showSignatures');
  }),
  actions: {
    print() {
      window.print();
    }
  }
});
