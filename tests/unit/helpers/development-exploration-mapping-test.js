import { explorationDevelopmentMapping } from '../../../helpers/exploration-development-mapping';
import { module, test } from 'qunit';

module('Unit | Helper | regulation type from id');

test('it maps the value to the textual representation', function(assert) {
  let result = explorationDevelopmentMapping(['exploration']);
  assert.equal(result, 'Exploration');

  result = explorationDevelopmentMapping(['development']);
  assert.equal(result, 'Development');
});
