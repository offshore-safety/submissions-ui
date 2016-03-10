import Ember from 'ember';
import Errors from '../mixins/errors';
import Serializable from '../mixins/serializable';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: [
    'selected', 'expectedDuration', 'durationUnits', 'type'
  ],
  selected: true,
  expectedDuration: null,
  durationUnits: 'years',
  type: null,
  errors: Ember.computed('expectedDuration', 'selected', function() {
    const errors = {};

    if (this.get('selected')) {
      if (!Ember.isPresent(this.get('expectedDuration'))) {
        errors['expectedDuration'] = 'Required';
      }
    }

    return errors;
  })
});
