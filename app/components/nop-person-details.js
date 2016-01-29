import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-person-details',
  disabled: false,
  fullName: Ember.computed('person.title', 'person.firstName', 'person.lastName', function() {
    const person = this.get('person');
    return `${person.title} ${person.firstName} ${person.lastName}`;
  })
});
