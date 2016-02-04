import { or } from '../../../helpers/or';
import { module, test } from 'qunit';

module('Unit | Helper | or');

test('it uses the second parameter if the first is blank', function(assert) {
  let result = or(['', '-']);
  assert.equal('-', result);
});
