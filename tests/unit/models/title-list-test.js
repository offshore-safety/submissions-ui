import { moduleForModel, test } from 'ember-qunit';

moduleForModel('title-list', 'Unit | Model | title-list', {
  // Specify the other units that are required for this test.
  needs: ['model:title']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
