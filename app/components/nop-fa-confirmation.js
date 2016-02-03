import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-fa-confirmation',
  disabled: false,
  trueOrFalse: [
    {label: 'Yes', value: true},
    {label: 'No', value: false}
  ],
});
