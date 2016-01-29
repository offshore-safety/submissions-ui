import { booleanToYesNo } from '../../../helpers/boolean-to-yes-no';
import { module, test } from 'qunit';

module('Unit | Helper | boolean to yes no');

test('it converts true to Yes', function(assert) {
  let result = booleanToYesNo([true]);
  assert.equal(result, 'Yes');
});

test('it converts false to No', function(assert) {
  let result = booleanToYesNo([false]);
  assert.equal(result, 'No');
});
