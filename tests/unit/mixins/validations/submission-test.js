import Ember from 'ember';
import ValidationsSubmissionMixin from '../../../mixins/validations/submission';
import { module, test } from 'qunit';

module('Unit | Mixin | validations/submission');

// Replace this with your real tests.
test('it works', function(assert) {
  let ValidationsSubmissionObject = Ember.Object.extend(ValidationsSubmissionMixin);
  let subject = ValidationsSubmissionObject.create();
  assert.ok(subject);
});
