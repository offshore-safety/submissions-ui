import { moduleForModel, test } from 'ember-qunit';

moduleForModel('environment-plan', 'Unit | Model | environment plan', {
  // Specify the other units that are required for this test.
  needs: [
    'model:activity-details',
    'model:title-list',
    'model:titleholder-details',
    'model:submission-contact',
    'model:liaison-contact',
    'model:activity-contact',
    'model:environment-plan-documents',
    'model:financial-assurance',
    'model:additional-info',
  ]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
