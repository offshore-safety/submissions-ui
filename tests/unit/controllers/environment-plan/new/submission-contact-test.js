import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:environment-plan/new/submission-contact', 'Unit | Controller | environment plan/new/submission contact', {
});

test('next route should be nominated liaison when neither contact same', function(assert) {
  let controller = this.subject();
  controller.set('model', {sameAsLiaison: false, sameAsActivity: false});

  assert.equal(controller._nextRoute(), 'environment-plan.new.liaison-contact');
  assert.ok(controller);
});

test('next route should be activity contact when nominated liaison same', function(assert) {
  let controller = this.subject();
  controller.set('model', {sameAsLiaison: true, sameAsActivity: false});

  assert.equal(controller._nextRoute(), 'environment-plan.new.activity-contact');
  assert.ok(controller);
});

test('next route should be attach environment plan when both contacts same', function(assert) {
  let controller = this.subject();
  controller.set('model', {sameAsLiaison: true, sameAsActivity: true});

  assert.equal(controller._nextRoute(), 'environment-plan.new.attach-environment-plan');
  assert.ok(controller);
});
