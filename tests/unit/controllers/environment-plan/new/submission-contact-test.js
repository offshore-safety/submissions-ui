import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:environment-plan/new/submission-contact', 'Unit | Controller | environment plan/new/submission contact', {
});

test('next route should be nominated liaison when neither contact same', function(assert) {
  let controller = this.subject();
  const contact = Ember.Object.create({sameAsLiaison: false, sameAsActivity: false});
  const parent = Ember.Object.create({submissionContact: contact});
  controller.set('model', parent);

  assert.equal(controller.get('next'), 'environment-plan.new.liaison-contact');
  assert.ok(controller);
});

test('next route should be activity contact when nominated liaison same', function(assert) {
  let controller = this.subject();
  const contact = Ember.Object.create({sameAsLiaison: true, sameAsActivity: false});
  const parent = Ember.Object.create({submissionContact: contact});
  controller.set('model', parent);

  assert.equal(controller.get('next'), 'environment-plan.new.activity-contact');
  assert.ok(controller);
});

test('next route should be attach environment plan when both contacts same', function(assert) {
  let controller = this.subject();
  const contact = Ember.Object.create({sameAsLiaison: true, sameAsActivity: true});
  const parent = Ember.Object.create({submissionContact: contact});
  controller.set('model', parent);

  assert.equal(controller.get('next'), 'environment-plan.new.documents');
  assert.ok(controller);
});
