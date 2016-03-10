import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
  tagName: 'nop-levies',
  levyCalculation: Ember.inject.service(),
  activityMappings: Ember.computed('titles.length', function() {
    return _.flatten(this.get('titles').map((t) => t.get('activityMappings')));
  }),
  levies: Ember.computed('activityMappings.@each.selected', 'activityMappings.@each.expectedDuration', 'activityMappings.@each.durationUnits', function() {
    return this.get('activityMappings')
               .map((am) => this.get('levyCalculation').calculateLeviesFor(am))
               .reduce((previous, current) => {
                 return {
                   activity: previous.activity + current.activity,
                   compliance: previous.compliance + current.compliance,
                   total: previous.total + current.total
                 };
             });
  })
});
