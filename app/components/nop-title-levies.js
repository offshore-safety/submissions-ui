import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-title-levies',
  levyCalculation: Ember.inject.service(),
  levies: Ember.computed('activityType.selected', 'activityType.expectedDuration', 'activityType.durationUnits', function() {
    return this.get('levyCalculation').calculateLeviesFor(this.get('activityType'));
  })
});
