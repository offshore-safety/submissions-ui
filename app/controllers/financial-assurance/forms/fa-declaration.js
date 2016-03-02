import Ember from 'ember';

export default Ember.Controller.extend({
  showParties: Ember.computed('declarationOption', function() {
    return Ember.isPresent(this.get('declarationOption'));
  }),
  showCompanyDirector: Ember.computed('signatoryType', function() {
    return this.get('signatoryType') === '1';
  }),
  showPowerOfAttorney: Ember.computed('signatoryType', function() {
    return this.get('signatoryType') === '2';
  }),
  showPrint: Ember.computed('showCompanyDirector', 'showPowerOfAttorney', function() {
    return this.get('showPowerOfAttorney') || this.get('showCompanyDirector');
  }),
  actions: {
    print() {
      window.print();
    }
  }
});
