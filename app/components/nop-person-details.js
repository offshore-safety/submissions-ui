import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-person-details',
  readonly: false,
  fullName: Ember.computed('person.title', 'person.firstName', 'person.lastName', function() {
    const person = this.get('person');
    const hasName = person.title && person.firstName && person.lastName;
    return hasName ? `${person.title} ${person.firstName} ${person.lastName}` : '';
  })
});
