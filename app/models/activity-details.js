import Ember from 'ember';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';
import Document from './document';
import ActivityType from './activity-type';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: [
    'name', 'description', 'locationMap', 'regulationType', 'hasOffshoreProject',
    'hasOPP', 'oppDocumentReference', 'hasMinisterDecision', 'epbcReferenceNumber',
    'activityTypes', 'visited'
  ],
  _relationshipTypes: {
    'locationMap': Document,
    'activityTypes': ActivityType
  },
  visited: false,
  name: null,
  description: null,
  locationMap: null,
  regulationType: null,
  hasOffshoreProject: null,
  hasOPP: null,
  oppDocumentReference: null,
  hasMinisterDecision: null,
  epbcReferenceNumber: null,
  activityTypes: [],
  errors: Ember.computed('name', 'description', 'locationMap.token', 'hasOffshoreProject', 'hasOPP', 'locationMap.errors',
                         'oppDocumentReference', 'hasMinisterDecision', 'epbcReferenceNumber', 'activityTypes.@each.errors', function() {
    const errors = {};

    if (Ember.isBlank(this.get('name'))) {
      errors['name'] = 'The activity name must be specified';
    }

    if (Ember.isBlank(this.get('description')) || this.get('description').split(' ').length < 100) {
      errors['description'] = 'The activity description must be specified at least 100 words';
    }

    if (Ember.isBlank(this.get('locationMap').get('token'))) {
      errors['locationMap'] = 'The location map must be uploaded';
    }

    if (Ember.isBlank(this.get('regulationType'))) {
      errors['regulationType'] = 'You must specify whether this is a petroleum or greenhouse gas activity';
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
