import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-activity-types',
  regulationTypes: [
    {label: 'Petroleum', value: 'petroleum', name: 'regulation-type-1'},
    {label: 'Greenhouse Gas', value: 'greenhouse_gas', name: 'regulation-type-2'}
  ],
  petroleumActivityTypeOptions: [
    {id: 1, text:'Operation of a facility'},
    {id: 2, text:'Storage, processing or transport of petroleum'},
    {id: 3, text:'Operation of a petroleum pipeline'},
    {id: 4, text:'Construction and installation of a facility'},
    {id: 5, text:'Construction and installation of a pipeline'},
    {id: 6, text:'Decommissioning, dismantling or removing a facility'},
    {id: 7, text:'Decommissioning, dismantling or removing a pipeline'},
    {id: 8, text:'Significant modification of a facility'},
    {id: 9, text:'Significant modification of a petroleum pipeline'},
    {id: 10, text:'Drilling'},
    {id: 11, text:'Seismic survey'},
    {id: 12, text:'Other survey'},
    {id: 13, text:'Any other petroleum-related activity'}
  ],
  greenhouseGasActivityTypeOptions: [
    {id: 1, text: 'Injection and storage of greenhouse gas'},
    {id: 2, text: 'Operation of a facility'},
    {id: 3, text: 'Operation of a greenhouse gas pipeline'},
    {id: 4, text: 'Construction and installation of a facility'},
    {id: 5, text: 'Construction and installation of a pipeline'},
    {id: 6, text: 'Decommissioning, dismantling or removing a facility'},
    {id: 7, text: 'Decommissioning, dismantling or removing a pipeline'},
    {id: 8, text: 'Significant modification of a facility'},
    {id: 9, text: 'Significant modification of a greenhouse gas pipeline'},
    {id: 10, text: 'Drilling'},
    {id: 11, text: 'Seismic survey'},
    {id: 12, text: 'Other survey'},
    {id: 13, text: 'Any other greenhouse gas-related activity'}
  ],
  petroleumActivity: Ember.computed.equal('submission.regulationType', 'petroleum'),
  greenhouseGasActivity: Ember.computed.equal('submission.regulationType', 'greenhouse_gas')
});
