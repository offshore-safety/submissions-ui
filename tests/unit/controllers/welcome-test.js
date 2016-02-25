import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:welcome', 'Unit | Controller | welcome', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('submittingEP', function(assert) {
  let controller = this.subject({submissionType: null});
  assert.notOk(controller.get('submittingEP'));

  controller.set('submissionType', 'ep');
  assert.ok(controller.get('submittingEP'));

  controller.set('submissionType', 'opp');
  assert.notOk(controller.get('submittingEP'));
});

test('submittingFA', function(assert) {
  let controller = this.subject({submissionType: null});
  assert.notOk(controller.get('submittingFA'));

  controller.set('submissionType', 'fa');
  assert.ok(controller.get('submittingFA'));

  controller.set('submissionType', 'opp');
  assert.notOk(controller.get('submittingFA'));
});

test('submittingOPP', function(assert) {
  let controller = this.subject({submissionType: null});
  assert.notOk(controller.get('submittingOPP'));

  controller.set('submissionType', 'opp');
  assert.ok(controller.get('submittingOPP'));

  controller.set('submissionType', 'ep');
  assert.notOk(controller.get('submittingOPP'));
});
