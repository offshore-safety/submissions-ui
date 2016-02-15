import Ember from 'ember';
import _ from 'lodash/lodash';
import Constants from '../constants';

export default Ember.Component.extend({
  tagName: 'nop-activity-description',
  classNameBindings: ['readonly'],
  regulationTypes: _.keys(Constants.REGULATION_TYPES).map((k, index) => {return {value: k, label: Constants.REGULATION_TYPES[k], name: `regulation-type-${index}`};}),
  trueOrFalse: [
    {label: 'Yes', value: true},
    {label: 'No', value: false}
  ],
  readonly: false,
  showOPPReference: Ember.computed('activityDetails.hasOPP', function() {
    return this.get('activityDetails').get('hasOPP') === true;
  }),
  showMinisterQuestion: Ember.computed('activityDetails.hasOPP', function() {
    return this.get('activityDetails').get('hasOPP') === false;
  }),
  showEPBCReference: Ember.computed('activityDetails.hasMinisterDecision', function() {
    return this.get('activityDetails').get('hasMinisterDecision') === true;
  })
});
