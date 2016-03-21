import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-person-details',
  readonly: false,
  showPostalAddress: true,
  fullName: Ember.computed('person.title', 'person.firstName', 'person.lastName', function() {
    const person = this.get('person');
    const hasName = person.title && person.firstName && person.lastName;
    return hasName ? `${person.title} ${person.firstName} ${person.lastName}` : '';
  }),
  postalAddressHint: Ember.computed('person.postalAddressRequired', function() {
    const postalAddressRequired = this.get('person').get('postalAddress').get('required');
    if (Ember.isPresent(postalAddressRequired) && !postalAddressRequired) {
      return 'Required if different from Titleholder';
    } else {
      return null;
    }
  })
});
