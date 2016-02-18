import Ember from 'ember';

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
  actions: {
    remove() {
      this.sendAction('removeTitle', this.get('title'));
    }
  }
});
