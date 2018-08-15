import Ember from 'ember';
import _ from 'lodash/lodash';
import Constants from '../constants';

export default Ember.Component.extend({
  tagName: 'nop-activity-details',
  classNameBindings: ['readonly', 'visited'],
  regulationTypes: _.keys(Constants.REGULATION_TYPES).map((k, index) => {return {value: k, label: Constants.REGULATION_TYPES[k], name: `regulation-type-${index}`};}),
  trueOrFalse: [
    {label: 'Yes', value: true},
    {label: 'No', value: false}
  ],
  oppOrEpbcOptions: [
    {label: 'OPP', value: 'OPP'},
    {label: 'EPBC', value: 'EPBC'}
  ],
  readonly: false,
  visited: Ember.computed('activityDetails.visited', function() {
    return this.get('activityDetails').get('visited');
  }),
  showOPPReference: Ember.computed('activityDetails.oppOrEpbc', function() {
    return this.get('activityDetails').get('oppOrEpbc') === 'OPP';
  }),
  showEPBCReference: Ember.computed('activityDetails.oppOrEpbc', function() {
    return this.get('activityDetails').get('oppOrEpbc') === 'EPBC';
  })
});
