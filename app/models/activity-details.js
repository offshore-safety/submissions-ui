import DS from 'ember-data';
import Ember from 'ember';
import Errors from '../mixins/errors';

export default DS.Model.extend(Errors, {
  name: DS.attr(),
  description: DS.attr(),
  locationMap: DS.belongsTo('document'),
  activityType: DS.attr(),
  hasOffshoreProject: DS.attr(),
  hasOPP: DS.attr(),
  oppDocumentReference: DS.attr(),
  hasMinisterDecision: DS.attr(),
  epbcReferenceNumber: DS.attr(),
  activityTypes: DS.hasMany('activity-type'),
  errors: Ember.computed('name', 'description', 'locationMap.token', 'hasOffshoreProject', 'hasOPP',
                         'oppDocumentReference', 'hasMinisterDecision', 'epbcReferenceNumber', 'activityTypes.@each.errors', function() {
    const errors = {};

    if (Ember.isBlank(this.get('name'))) {
      errors['name'] = 'The activity name must be specified';
    }

    if (Ember.isBlank(this.get('description'))) {
      errors['description'] = 'The activity description must be specified';
    }

    if (Ember.isBlank(this.get('locationMap').get('token'))) {
      errors['locationMap'] = 'The location map must be uploaded';
    }

    if (Ember.isBlank(this.get('hasOffshoreProject'))) {
      errors['hasOffshoreProject'] = 'You must specify whether this activity is part of an offshore project';
    }

    if (this.get('hasOffshoreProject') && Ember.isBlank(this.get('hasOPP'))) {
      errors['hasOPP'] = 'You must specify whether this has an Offshore Project Proposal (OPP)';
    }

    if (this.get('hasOPP') === false && Ember.isBlank(this.get('hasMinisterDecision'))) {
      errors['hasMinisterDecision'] = 'You must specify whether there is an Environment Minister decision';
    }

    if (this.get('hasOPP') && Ember.isBlank(this.get('oppDocumentReference'))) {
      errors['oppDocumentReference'] = 'You must specify the OPP document reference';
    }

    if (this.get('hasMinisterDecision') && Ember.isBlank(this.get('epbcReferenceNumber'))) {
      errors['epbcReferenceNumber'] = 'You must specify the EPBC reference number';
    }

    errors['activityTypes'] = this.get('activityTypes').map((at) => at.get('errors'));

    return errors;
  })
});
