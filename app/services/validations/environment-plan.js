import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Service.extend({
  activityDescription: Ember.inject.service('validations.activity-description'),
  titles: Ember.inject.service('validations.titles'),
  titleholderDetails: Ember.inject.service('validations.titleholder-details'),
  validate(entity) {
    const errors = {};

    _.merge(errors, this.get('activityDescription').validate(entity));
    _.merge(errors, this.get('titles').validate(entity));
    _.merge(errors, this.get('titleholderDetails').validate(entity));

    return errors;
  }
});
