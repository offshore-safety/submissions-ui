import { countryFromCode } from '../../../helpers/country-from-code';
import { module, test } from 'qunit';

module('Unit | Helper | country from code');

test('it retrieves a company name from its alpha2 code', function(assert) {
  let result = countryFromCode(['AU']);
  assert.equal(result, 'Australia');

  result = countryFromCode(['SG']);
  assert.equal(result, 'Singapore');
});
