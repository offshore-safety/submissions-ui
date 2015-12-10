import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-activity-description',
  regulationTypes: [
    {label: 'Petroleum', value: 'petroleum', name: 'regulation-type-1'},
    {label: 'Greenhouse Gas', value: 'greenhouse_gas', name: 'regulation-type-2'}
  ]
});
