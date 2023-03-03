import Ember from 'ember';

export default Ember.Controller.extend({
  selectOptions: [
    {id: 1, text: 'Operation of a facility for the recovery or processing of petroleum'},
    {id: 2, text: 'Storage of petroleum but not for the recovery or processing of petroleum'},
    {id: 3, text: 'Operation of a petroleum pipeline'},
    {id: 4, text: 'Construction and installation of a facility'},
    {id: 5, text: 'Construction and installation of a pipeline'},
    {id: 6, text: 'Decommissioning, dismantling or removing a facility'}
  ],
  regulationTypes: [
    {label: 'Petroleum', value: 'petroleum', name: 'regulation-type-1'},
    {label: 'Greenhouse Gas', value: 'greenhouse_gas', name: 'regulation-type-2'},
    {label: 'Disabled', value: 'disabled', name: 'regulation-type-3', disabled: true},
    {label: 'Disabled (Checked)', value: 'disabled-checked', name: 'regulation-type-4', disabled: true}
  ],
  selectedRadio: 'disabled-checked',
  isShowingModal: false,
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});
