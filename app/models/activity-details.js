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
      errors['name'] = 'Required';
    }

    if (Ember.isBlank(this.get('description')) || this.get('description').split(' ').length < 100) {
      errors['description'] = 'The activity description must be specified at least 100 words';
    }

    if (Ember.isBlank(this.get('description'))) {
      errors['description'] = 'Required';
    }

    if (Ember.isBlank(this.get('locationMap').get('token'))) {
      errors['locationMap'] = 'Required';
    }

    if (Ember.isBlank(this.get('regulationType'))) {
      errors['regulationType'] = 'Required';
    }

    if (Ember.isBlank(this.get('hasOffshoreProject'))) {
      errors['hasOffshoreProject'] = 'Required';
    }

    if (this.get('hasOffshoreProject') && Ember.isBlank(this.get('hasOPP'))) {
      errors['hasOPP'] = 'Required';
    }

    if (this.get('hasOPP') === false && Ember.isBlank(this.get('hasMinisterDecision'))) {
      errors['hasMinisterDecision'] = 'Required';
    }

    if (this.get('hasOPP') && Ember.isBlank(this.get('oppDocumentReference'))) {
      errors['oppDocumentReference'] = 'Required';
    }

    if (this.get('hasMinisterDecision') && Ember.isBlank(this.get('epbcReferenceNumber'))) {
      errors['epbcReferenceNumber'] = 'Required';
    }
    
    errors['activityTypes'] = this.get('activityTypes').map((at) => at.get('errors'));

    return errors;
  })
});
