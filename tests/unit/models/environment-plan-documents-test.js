import { moduleForModel, test } from 'ember-qunit';

moduleForModel('environment-plan-documents', 'Unit | Model | environment plan documents', {
  // Specify the other units that are required for this test.
  needs: ['model:document']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
