import Ember from 'ember';
import ActivityMapping from './activity-mapping';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: [
    'titleOrApplicationNumber', 'commonwealthWaters', 'region', 'activityMappings'
  ],
  _relationshipTypes: {
    'activityMappings': ActivityMapping
  },
  titleOrApplicationNumber: null,
  commonwealthWaters: null,
  region: null,
  activityMappings: [],
  copyLocationFrom(otherTitle) {
    this.set('commonwealthWaters', otherTitle.get('commonwealthWaters'));
    this.set('region', otherTitle.get('region'));

    return this;
  },
  errors: Ember.computed('titleOrApplicationNumber', 'commonwealthWaters', 'region', 'activityMappings.@each.errors', function() {
    const errors = {};

    if (Ember.isBlank(this.get('titleOrApplicationNumber'))) {
      errors['titleOrApplicationNumber'] = 'Required';
    }

    if (Ember.isBlank(this.get('commonwealthWaters'))) {
      errors['commonwealthWaters'] = 'Required';
    }

    if (Ember.isBlank(this.get('region'))) {
      errors['region'] = 'Required';
    }

    errors['activityMappings'] = this.get('activityMappings').map((am) => am.get('errors'));

    return errors;
  })
});
