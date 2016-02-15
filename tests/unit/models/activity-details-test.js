import { moduleForModel, test } from 'ember-qunit';

moduleForModel('activity-details', 'Unit | Model | activity details', {
  // Specify the other units that are required for this test.
  needs: ['model:document', 'model:activity-type']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
