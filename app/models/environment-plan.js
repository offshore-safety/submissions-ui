import DS from 'ember-data';

export default DS.Model.extend({
  activityDetails: DS.belongsTo('activity-details', {async: false}),
  titles: DS.belongsTo('title-list', {async: false}),
  titleholderDetails: DS.belongsTo('titleholder-details', {async: false}),
  submissionContact: DS.belongsTo('submission-contact', {async: false}),
  liaisonContact: DS.belongsTo('liaison-contact', {async: false}),
  activityContact: DS.belongsTo('activity-contact', {async: false}),
  documents: DS.belongsTo('environment-plan-documents', {async: false}),
  financialAssurance: DS.belongsTo('financial-assurance', {async: false}),
  additionalInfo: DS.belongsTo('additional-info', {async: false}),
});
