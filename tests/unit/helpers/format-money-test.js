import { formatMoney } from 'submissions-ui/helpers/format-money';
import { module, test } from 'qunit';

module('Unit | Helper | format money');

test('it works', function(assert) {
  let result = formatMoney([42]);
  assert.equal('$42', result);
});
