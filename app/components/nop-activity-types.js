import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-activity-types',
  regulationTypes: [
    {label: 'Petroleum', value: 'petroleum', name: 'regulation-type-1'},
    {label: 'Greenhouse Gas', value: 'greenhouse_gas', name: 'regulation-type-2'}
  ],
  petroleumActivityTypeOptions: [
    {id: '1001', text:'Operation of a facility'},
    {id: '1002', text:'Storage, processing or transport of petroleum'},
    {id: '1003', text:'Operation of a petroleum pipeline'},
    {id: '1004', text:'Construction and installation of a facility'},
    {id: '1005', text:'Construction and installation of a pipeline'},
    {id: '1006', text:'Decommissioning, dismantling or removing a facility'},
    {id: '1007', text:'Decommissioning, dismantling or removing a pipeline'},
    {id: '1008', text:'Significant modification of a facility'},
    {id: '1009', text:'Significant modification of a petroleum pipeline'},
    {id: '1010', text:'Drilling'},
    {id: '1011', text:'Seismic survey'},
    {id: '1012', text:'Other survey'},
    {id: '1013', text:'Any other petroleum-related activity'}
  ],
  greenhouseGasActivityTypeOptions: [
    {id: '2001', text: 'Injection and storage of greenhouse gas'},
    {id: '2002', text: 'Operation of a facility'},
    {id: '2003', text: 'Operation of a greenhouse gas pipeline'},
    {id: '2004', text: 'Construction and installation of a facility'},
    {id: '2005', text: 'Construction and installation of a pipeline'},
    {id: '2006', text: 'Decommissioning, dismantling or removing a facility'},
    {id: '2007', text: 'Decommissioning, dismantling or removing a pipeline'},
    {id: '2008', text: 'Significant modification of a facility'},
    {id: '2009', text: 'Significant modification of a greenhouse gas pipeline'},
    {id: '2010', text: 'Drilling'},
    {id: '2011', text: 'Seismic survey'},
    {id: '2012', text: 'Other survey'},
    {id: '2013', text: 'Any other greenhouse gas-related activity'}
  ],
  petroleumActivity: Ember.computed.equal('submission.regulationType', 'petroleum'),
  greenhouseGasActivity: Ember.computed.equal('submission.regulationType', 'greenhouse_gas'),
  hasRegulationType: Ember.computed('submission.regulationType', function() {
    return this.get('submission').regulationType !== undefined;
  }),
  actions: {
    addActivityType() {
      this.get('submission').activityTypes.pushObject({});
    }
  }
});
