import { activityTypeFromId } from '../../../helpers/activity-type-from-id';
import { module, test } from 'qunit';

module('Unit | Helper | activity type from id');

test('it maps the value to the textual representation', function(assert) {
  let result = activityTypeFromId(['1001']);
  assert.equal(result, 'Operation of a facility for the recovery or processing of petroleum');

  result = activityTypeFromId(['2001']);
  assert.equal(result, 'Operation of a facility for the injection and storage of GHG substance');
});
