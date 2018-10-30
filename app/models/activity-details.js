import Ember from 'ember';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';
import Document from './document';
import ActivityType from './activity-type';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: [
    'name', 'description', 'locationMap', 'regulationType', 'hasOffshoreProject',
    'hasOPP', 'oppDocumentReference', 'hasMinisterDecision', 'epbcReferenceNumber',
    'activityTypes', 'epDuration', 'visited', 'explorationDevelopment'
  ],
  _relationshipTypes: {
    'locationMap': Document,
    'activityTypes': ActivityType
  },
  visited: false,
  name: null,
  description: null,
  locationMap: null,
  epDuration: null,
  regulationType: null,
  explorationDevelopment: null,
  hasOffshoreProject: null,
  oppOrEpbc: null,
  hasOPP: null,
  oppDocumentReference: null,
  hasMinisterDecision: null,
  epbcReferenceNumber: null,
  activityTypes: [],
  _oppSectionChanged: Ember.observer('oppOrEpbc', 'hasOffshoreProject', function() {
    if (Ember.isPresent(this.get('hasOffshoreProject')) && !this.get('hasOffshoreProject')) {
      this.set('oppDocumentReference', null);
      this.set('epbcReferenceNumber', null);
      this.set('hasMinisterDecision', null);
      this.set('hasOPP', null);
      this.set('oppOrEpbc', null);
    } else {
      if (Ember.isPresent(this.get('oppOrEpbc'))) {
        if (this.get('oppOrEpbc') === 'OPP') {
          this.set('hasOPP', true);
          this.set('hasMinisterDecision', false);
          this.set('epbcReferenceNumber', null);
        } else if (this.get('oppOrEpbc') === 'EPBC') {
          this.set('hasMinisterDecision', true);
          this.set('hasOPP', false);
          this.set('oppDocumentReference', null);
        } else {
          this.set('oppDocumentReference', null);
          this.set('epbcReferenceNumber', null);
          this.set('hasMinisterDecision', null);
          this.set('hasOPP', null);
        }
      }
    }
  }),
  errors: Ember.computed('name', 'description', 'locationMap.token', 'hasOffshoreProject', 'hasOPP', 'locationMap.errors', 'explorationDevelopment',
                         'oppDocumentReference', 'hasMinisterDecision', 'epbcReferenceNumber', 'epDuration', 'activityTypes.@each.errors', function() {
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

    if (Ember.isBlank(this.get('locationMap'))) {
      errors['locationMap'] = 'Required';
    }

    if (Ember.isBlank(this.get('regulationType'))) {
      errors['regulationType'] = 'Required';
    }

    if (Ember.isBlank(this.get('explorationDevelopment'))) {
      errors['explorationDevelopment'] = 'Required';
    }

    if (Ember.isBlank(this.get('hasOffshoreProject'))) {
      errors['hasOffshoreProject'] = 'Required';
    }

    const epDuration = this.get('epDuration');
    if (Ember.isBlank(epDuration)) {
      errors['epDuration'] = 'Required';
    } else {
      if (isNaN(epDuration) || epDuration < 1 || epDuration > 5) {
        errors['epDuration'] = 'Duration must be a number between 1 and 5';
      }
    }

    if (this.get('hasOffshoreProject')) {
      if (Ember.isBlank(this.get('oppOrEpbc'))) {
        errors['oppOrEpbc'] = 'Required';
      }
      if (this.get('hasOPP') && Ember.isBlank(this.get('oppDocumentReference'))) {
        errors['oppDocumentReference'] = 'Required';
      }

      if (this.get('hasMinisterDecision') && Ember.isBlank(this.get('epbcReferenceNumber'))) {
        errors['epbcReferenceNumber'] = 'Required';
      }
    }

    errors['activityTypes'] = this.get('activityTypes').map((at) => at.get('errors'));

    return errors;
  })
});
