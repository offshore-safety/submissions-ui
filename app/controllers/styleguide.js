import Ember from 'ember';

export default Ember.Controller.extend({
  selectOptions: [
    {id: 1, text: 'Operation of a facility'},
    {id: 2, text: 'Storage, processing or transport of petroleum'},
    {id: 3, text: 'Operation of a petroleum pipeline'},
    {id: 4, text: 'Construction and installation of a facility'},
    {id: 5, text: 'Construction and installation of a pipeline'},
    {id: 6, text: 'Decommissioning, dismantling or removing a facility'}
  ],
  regulationTypes: [
    {label: 'Petroleum', value: 'petroleum', inputId: 'regulation-type-1'},
    {label: 'Greenhouse Gas', value: 'greenhouse_gas', inputId: 'regulation-type-2'}
  ]
});
