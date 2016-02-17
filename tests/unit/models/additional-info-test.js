import { moduleForModel, test } from 'ember-qunit';

moduleForModel('additional-info', 'Unit | Model | additional info', {
  // Specify the other units that are required for this test.
  needs: ['model:confirmation-email']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
