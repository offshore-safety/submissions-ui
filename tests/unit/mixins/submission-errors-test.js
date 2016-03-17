import Ember from 'ember';
import SubmissionErrorsMixin from 'submissions-ui/mixins/submission-errors';
import { module, test } from 'qunit';

module('Unit | Mixin | submission errors');

// Replace this with your real tests.
test('it works', function(assert) {
  let SubmissionErrorsObject = Ember.Object.extend(SubmissionErrorsMixin);
  let subject = SubmissionErrorsObject.create();
  assert.ok(subject);
});
