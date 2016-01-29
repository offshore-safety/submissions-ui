import Ember from 'ember';
import _ from 'lodash/lodash';
import Constants from '../constants';

export default Ember.Service.extend({
  all() {
    return _.keys(Constants.COUNTRIES).map((k) => {return {text: Constants.COUNTRIES[k], id: k};});
  },
  names() {
    return _.values(Constants.COUNTRIES);
  },
  codes() {
    return _.keys(Constants.COUNTRIES);
  }
});
