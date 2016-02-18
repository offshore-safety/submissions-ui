import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-titleholder-details',
  readonly: false,
  _sameAsBusinessChanged: Ember.observer('titleholder.sameAsBusiness', function() {
    const sameAsBusiness = this.get('titleholder').get('sameAsBusiness');
    if (sameAsBusiness) {
      const titleholder = this.get('titleholder');
      titleholder.set('postalAddress', titleholder.get('businessAddress').copy());
    }
  })
});
