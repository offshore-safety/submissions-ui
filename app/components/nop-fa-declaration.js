import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-fa-declaration',
  trueOrFalse: [
    {label: 'Yes', value: true},
    {label: 'No', value: false}
  ],
});