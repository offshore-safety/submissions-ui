import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-title',
  readonly: false,
  structuredRegions: {
    'Ashmore Cartier Island': {
      regions: [
        {id: 18695, text: '?????'}
      ]
    },
    'New South Wales': {
      regions: [
        {id: 2, text: 'New South Wales'},
      ]
    },
    'Northern Territory': {
      regions: [
        {id: 12, text: 'Nothern Territory'},
      ]
    },
    'Queensland': {
      regions: [
        {id: 1, text: 'Queensland'},
      ]
    },
    'South Australia': {
      regions: [
        {id: 6, text: 'South Australia'},
      ]
    },
    'Tasmania': {
      regions: [
        {id: 4, text: 'Tasmania'},
      ]
    },
    'Victoria': {
      regions: [
        {id: 3, text: 'Gippsland'},
        {id: 5, text: 'Otway'},
      ]
    },
    'Western Australia': {
      regions: [
        {id: 7, text: 'Great Southern'},
        {id: 8, text: 'South West'},
        {id: 9, text: 'Midwest'},
        {id: 10, text: 'Pilbara'},
        {id: 11, text: 'North West'},
      ]
    },
  },
  allRegions: Ember.computed(function() {
    let structuredRegions = this.get('structuredRegions');
    let regions = Object.keys(structuredRegions).map(function(value) {
      return structuredRegions[value].regions[0];
    });
    return regions;
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
  regions: Ember.computed('title.commonwealthWaters', function() {
    let commonwealthWaters = this.get('title.commonwealthWaters');
    let structuredRegions = this.get('structuredRegions');
    if(Ember.isBlank(commonwealthWaters)) {
      return this.get('allRegions');
    }
    else {
      return structuredRegions[commonwealthWaters].regions;

    }
  }),

  actions: {
    remove() {
      this.sendAction('removeTitle', this.get('title'));
    }
  }
});
