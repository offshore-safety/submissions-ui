import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:environment-plan/new/attach-environment-plan', 'Unit | Controller | environment plan/new/attach environment plan', {
});

test('previous route should be activity contact if sameAsActivity not set', function(assert) {
  let controller = this.subject();
  controller.set('model', {sameAsLiaison: false, sameAsActivity: false});

  assert.equal(controller._previousRoute(), 'environment-plan.new.activity-contact');
  assert.ok(controller);
});

test('previous route should be liaison contact if sameAsActivity set but sameAsLiaison but not set', function(assert) {
  let controller = this.subject();
  controller.set('model', {sameAsLiaison: false, sameAsActivity: true});

  assert.equal(controller._previousRoute(), 'environment-plan.new.liaison-contact');
  assert.ok(controller);
});

test('previous route should be submission contact if both sameAsActivity and sameAsLiaison set', function(assert) {
  let controller = this.subject();
  controller.set('model', {sameAsLiaison: true, sameAsActivity: true});

  assert.equal(controller._previousRoute(), 'environment-plan.new.submission-contact');
  assert.ok(controller);
});
