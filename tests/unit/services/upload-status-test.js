import { moduleFor, test } from 'ember-qunit';

moduleFor('service:upload-status', 'Unit | Service | upload status', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it reports uploads in progress based on additions/removals', function(assert) {
  let service = this.subject();

  service.uploadStarted();
  assert.ok(service.get('inProgress'));

  service.uploadCancelled();
  assert.notOk(service.get('inProgress'));

  service.uploadStarted();
  assert.ok(service.get('inProgress'));

  service.uploadComplete();
  assert.notOk(service.get('inProgress'));

  service.uploadStarted();
  service.uploadStarted();
  assert.ok(service.get('inProgress'));

  service.uploadComplete();
  assert.ok(service.get('inProgress'));

  service.uploadComplete();
  assert.notOk(service.get('inProgress'));
});
