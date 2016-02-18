import Ember from 'ember';
import SubmissionStateMixin from '../../../mixins/submission-state';
import { module, test } from 'qunit';

module('Unit | Mixin | submission state');

// Replace this with your real tests.
test('it works', function(assert) {
  let SubmissionStateObject = Ember.Object.extend(SubmissionStateMixin);
  let subject = SubmissionStateObject.create();
  assert.ok(subject);
});
