import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
  tagName: 'nop-title',
  readonly: false,
  commonwealthWaters: [
    {
      id: 1, 
      text: 'Ashmore Cartier Island',
      regions: [{ id: 12, text: 'Nothern Territory' }]
    },
    {
      id: 2, 
      text: 'New South Wales',
      regions: [{ id: 2, text: 'New South Wales' }]
    },
    {
      id: 3, 
      text: 'Northern Territory',
      regions: [{ id: 12, text: 'Nothern Territory' }]
    },
    {
      id: 4, 
      text: 'Queensland',
      regions: [{ id: 1, text: 'Queensland' }]
    },
    {
      id: 5, 
      text: 'South Australia',
      regions: [{ id: 6, text: 'South Australia' }]
    },
    {
      id: 6, 
      text: 'Tasmania',
      regions: [{ id: 4, text: 'Tasmania' }]
    },
    {
      id: 7, 
      text: 'Victoria',
      regions: [{ id: 3, text: 'Otway' },
                { id: 5, text: 'Gippsland' }]
    },
    {
      id: 8, 
      text: 'Western Australia',
      regions: [{ id: 7, text: 'North West' },
                { id: 8, text: 'Pilbara' },
                { id: 9, text: 'Midwest' },
                { id: 10, text: 'South West' },
                { id: 11, text: 'Great Southern' }]
    },
  ],
  commonwealthWatersSorted: Ember.computed('commonwealthWaters', function() {
    return _.sortBy(this.get('commonwealthWaters'), 'text');
  }),
  regions: Ember.computed('title.commonwealthWaters', function() {
    let commonwealthWaters = this.get('title').get('commonwealthWaters');
    return _(this.commonwealthWaters).where({ text: commonwealthWaters })
                                     .map('regions')
                                     .flatten()
                                     .sortBy('id')
                                     .value();
  }),
  commonwealthWatersObserver: Ember.observer('title.commonwealthWaters', function() {
    var title = this.get('title');
    let commonwealthWaters = title.get('commonwealthWaters');
    let regions = _(this.commonwealthWaters).where({ text: commonwealthWaters })
                                            .map('regions')
                                            .flatten()
                                            .sortBy('id')
                                            .value();
    if (regions.length === 0) {
      return;
    }
    if (!_.find(regions, { title: title.get('region') })) {
      title.set('region', regions[0].text);
    }
    if (regions.length === 1) {
      title.set('region', regions[0].text);
    }
  }),
  actions: {
    remove() {
      this.sendAction('removeTitle', this.get('title'));
    }
  }
});
