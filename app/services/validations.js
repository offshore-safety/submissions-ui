import Ember from 'ember';

export default Ember.Service.extend({
  activityDescription: Ember.inject.service('validations.activity-description'),
  activityTypes: Ember.inject.service('validations.activity-types'),
  attachments: Ember.inject.service('validations.attachments'),
  environmentPlan: Ember.inject.service('validations.environment-plan'),
  faConfirmation: Ember.inject.service('validations.fa-confirmation'),
  faDeclaration: Ember.inject.service('validations.fa-declaration'),
  titleholderDetails: Ember.inject.service('validations.titleholder-details'),
  titles: Ember.inject.service('validations.titles')
});
