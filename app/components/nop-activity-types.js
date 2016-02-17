import Ember from 'ember';
import _ from 'lodash/lodash';
import Constants from '../constants';
import ActivityType from '../models/activity-type';

export default Ember.Component.extend({
  tagName: 'nop-activity-types',
  store: Ember.inject.service(),
  classNameBindings: ['readonly'],
  readonly: false,
  _regulationTypeChanged: Ember.observer('regulationType', function() {
    this.get('activityTypes').clear();
    this._addActivityType();
  }),
  _addActivityType() {
    const newType = ActivityType.create();
    this.get('activityTypes').pushObject(newType);
  },
  regulationTypes: _.keys(Constants.REGULATION_TYPES).map((k, index) => {return {value: k, label: Constants.REGULATION_TYPES[k], name: `regulation-type-${index}`};}),
  petroleumActivityTypeOptions: _.keys(Constants.PETROLEUM_ACTIVITY_TYPES).map((k) => {return {id: k, text: Constants.PETROLEUM_ACTIVITY_TYPES[k]};}),
  greenhouseGasActivityTypeOptions: _.keys(Constants.GREENHOUSE_GAS_ACTIVITY_TYPES).map((k) => {return {id: k, text: Constants.GREENHOUSE_GAS_ACTIVITY_TYPES[k]};}),
  petroleumActivity: Ember.computed.equal('regulationType', 'petroleum'),
  greenhouseGasActivity: Ember.computed.equal('regulationType', 'greenhouse_gas'),
  actions: {
    addActivityType() {
      this._addActivityType();
    }
  },
  multipleActivityTypes: Ember.computed('activityTypes.length', function() {
    return this.get('activityTypes').length > 1;
  })
});
