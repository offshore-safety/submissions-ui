import { regulationTypeFromId } from '../../../helpers/regulation-type-from-id';
import { module, test } from 'qunit';

module('Unit | Helper | regulation type from id');

test('it maps the value to the textual representation', function(assert) {
  let result = regulationTypeFromId(['petroleum']);
  assert.equal(result, 'Petroleum');

  result = regulationTypeFromId(['greenhouse_gas']);
  assert.equal(result, 'Greenhouse Gas');
});
