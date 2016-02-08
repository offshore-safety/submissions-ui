import Ember from 'ember';
import ComponentValidationMixin from '../../../mixins/component-validation';
import { module, test } from 'qunit';

module('Unit | Mixin | component validation');

test('it does nothing with no errors', function(assert) {
  let ComponentValidationObject = Ember.Object.extend(ComponentValidationMixin);
  let errors = {};
  let validator = {
    validate: function() {
      return errors;
    }
  };
  let subject = ComponentValidationObject.create({validator: validator});
  subject._performValidation();
  assert.equal(JSON.stringify(errors), JSON.stringify(subject.errors));
  assert.equal(false, subject.hasErrors);
});


test('it puts errors on the object and flags there are some', function(assert) {
  let ComponentValidationObject = Ember.Object.extend(ComponentValidationMixin);
  let errors = {
    'monkeys': 'Monkeys are vital'
  };
  let validator = {
    validate: function() {
      return errors;
    }
  };
  let subject = ComponentValidationObject.create({validator: validator});
  subject._performValidation();
  assert.equal(JSON.stringify(errors), JSON.stringify(subject.errors));
  assert.equal(true, subject.hasErrors);
});
