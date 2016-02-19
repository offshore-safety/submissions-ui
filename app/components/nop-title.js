import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
  tagName: 'nop-title',
  readonly: false,
  regions: [
    {id: 1, text: 'Queensland'},
    {id: 2, text: 'New South Wales'},
    {id: 3, text: 'Gippsland'},
    {id: 4, text: 'Tasmania'},
    {id: 5, text: 'Otway'},
    {id: 6, text: 'South Australia'},
    {id: 7, text: 'Great Southern'},
    {id: 8, text: 'South West'},
    {id: 9, text: 'Midwest'},
    {id: 10, text: 'Pilbara'},
    {id: 11, text: 'North West'},
    {id: 12, text: 'Nothern Territory'},
  ],
  regionsSorted: Ember.computed('regions', function() {
    return _.sortBy(this.get('regions'), 'text');
  }),
  commonwealthWaters: [
    {id: 1, text: 'Ashmore Cartier Island'},
    {id: 2, text: 'New South Wales'},
    {id: 3, text: 'Northern Territory'},
    {id: 4, text: 'Queensland'},
    {id: 5, text: 'South Australia'},
    {id: 6, text: 'Tasmania'},
    {id: 7, text: 'Victoria'},
    {id: 8, text: 'Western Australia'},
  ],
  commonwealthWatersSorted: Ember.computed('commonwealthWaters', function() {
    return _.sortBy(this.get('commonwealthWaters'), 'text');
  }),
  actions: {
    remove() {
      this.sendAction('removeTitle', this.get('title'));
    }
  }
});
