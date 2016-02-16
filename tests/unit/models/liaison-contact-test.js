import { moduleForModel, test } from 'ember-qunit';

moduleForModel('liaison-contact', 'Unit | Model | liaison contact', {
  // Specify the other units that are required for this test.
  needs: ['model:address']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
