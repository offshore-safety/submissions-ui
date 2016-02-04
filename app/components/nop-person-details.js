import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-person-details',
  readonly: false,
  _initialisePerson: function() {
    const person = this.get('person');

    if (!person.postalAddress) {
      person.postalAddress = {};
    }
  }.on('init'),
  fullName: Ember.computed('person.title', 'person.firstName', 'person.lastName', function() {
    const person = this.get('person');
    const hasName = person.title && person.firstName && person.lastName;
    return hasName ? `${person.title} ${person.firstName} ${person.lastName}` : '';
  })
});
