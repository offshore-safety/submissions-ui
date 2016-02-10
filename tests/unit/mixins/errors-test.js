import Ember from 'ember';
import ErrorsMixin from '../../../mixins/errors';
import { module, test } from 'qunit';

module('Unit | Mixin | errors');

// Replace this with your real tests.
test('it works', function(assert) {
  let ErrorsObject = Ember.Object.extend(ErrorsMixin);
  let subject = ErrorsObject.create();
  assert.ok(subject);
});
