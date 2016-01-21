import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:environment-plan/new/liaison-contact', 'Unit | Controller | environment plan/new/liaison contact', {
});

test('next route should be activity contact sameAsActivity not set', function(assert) {
  let controller = this.subject();
  controller.set('model', {sameAsLiaison: false, sameAsActivity: false});

  assert.equal(controller._nextRoute(), 'environment-plan.new.activity-contact');
  assert.ok(controller);
});

test('next route should be activity types sameAsActivity set', function(assert) {
  let controller = this.subject();
  controller.set('model', {sameAsLiaison: true, sameAsActivity: true});

  assert.equal(controller._nextRoute(), 'environment-plan.new.activity-types');
  assert.ok(controller);
});
