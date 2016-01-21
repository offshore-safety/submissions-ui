import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:environment-plan/new/activity-contact', 'Unit | Controller | environment plan/new/activity contact', {
});

test('previous route should be liaison contact if sameAsLiaison not set', function(assert) {
  let controller = this.subject();
  controller.set('model', {sameAsLiaison: false, sameAsActivity: false});

  assert.equal(controller._previousRoute(), 'environment-plan.new.liaison-contact');
  assert.ok(controller);
});

test('previous route should be submission contact if sameAsLiaison set', function(assert) {
  let controller = this.subject();
  controller.set('model', {sameAsLiaison: true, sameAsActivity: true});

  assert.equal(controller._previousRoute(), 'environment-plan.new.submission-contact');
  assert.ok(controller);
});
