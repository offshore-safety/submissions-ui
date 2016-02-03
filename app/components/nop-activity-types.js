import Ember from 'ember';
import _ from 'lodash/lodash';
import Constants from '../constants';

export default Ember.Component.extend({
  tagName: 'nop-activity-types',
  readonly: false,
  regulationTypes: _.keys(Constants.REGULATION_TYPES).map((k, index) => {return {value: k, label: Constants.REGULATION_TYPES[k], name: `regulation-type-${index}`};}),
  petroleumActivityTypeOptions: _.keys(Constants.PETROLEUM_ACTIVITY_TYPES).map((k) => {return {id: k, text: Constants.PETROLEUM_ACTIVITY_TYPES[k]};}),
  greenhouseGasActivityTypeOptions: _.keys(Constants.GREENHOUSE_GAS_ACTIVITY_TYPES).map((k) => {return {id: k, text: Constants.GREENHOUSE_GAS_ACTIVITY_TYPES[k]};}),
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
