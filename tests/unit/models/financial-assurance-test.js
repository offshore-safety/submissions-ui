import { moduleForModel, test } from 'ember-qunit';

moduleForModel('financial-assurance', 'Unit | Model | financial assurance', {
  // Specify the other units that are required for this test.
  needs: ['model:document']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
