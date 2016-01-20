import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Mixin.create(EmberValidations, {
  validations: {
    'model.activityTypes': {
      presence: true,
      length: {minimum: 1}
    },
    'model.comments': {
      presence: true,
      length: {minimum: 5}
    }
  }
});
