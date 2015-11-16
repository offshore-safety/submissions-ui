import Ember from 'ember';

export default Ember.Controller.extend({
  selectOptions: [
    'Operation of a facility',
    'Storage, processing or transport of petroleum',
    'Operation of a petroleum pipeline',
    'Construction and installation of a facility',
    'Construction and installation of a pipeline',
    'Decommissioning, dismantling or removing a facility'
  ]
});
