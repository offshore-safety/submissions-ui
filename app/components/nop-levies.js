import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
  tagName: 'nop-levies',
  levyCalculation: Ember.inject.service(),
  submissionStore: Ember.inject.service(),
  activityMappings: Ember.computed('titles.titles.length', function() {
    return _.flatten(this.get('titles').map((t) => t.get('activityMappings')));
  }),
  showLevies: Ember.computed('activityMappings', function() {
    return Ember.isPresent(this.get('activityMappings'));
  }),
  levy: Ember.computed('activityMappings.@each.selected', 'activityMappings.@each.expectedDuration', 'activityMappings.@each.durationUnits', function() {
    var levy = this.get('activityMappings')
               .map((am) => this.get('levyCalculation').calculateLeviesFor(am))
               .reduce((previous, current) => {
                 return {
                   activity: previous.activity + current.activity,
                   compliance: previous.compliance + current.compliance,
                   total: previous.total + current.total
                 };
             }, {activity: 0, compliance: 0, total: 0});

    this.get('targetObject').get('model').set('levies.total', levy.total);
    this.get('targetObject').get('model').set('levies.activity', levy.activity);
    this.get('targetObject').get('model').set('levies.compliance', levy.compliance);

    return levy;
  })
});
