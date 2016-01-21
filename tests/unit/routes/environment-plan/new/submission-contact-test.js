import { moduleFor, test } from 'ember-qunit';

moduleFor('route:environment-plan/new/submission-contact', 'Unit | Route | environment plan/new/submission contact', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it copies the activity contact from the submission contact when flag set', function(assert) {
  const route = this.subject();
  const model = {submissionContact: {name: 'submission'}};

  route._copyContacts(model);
  assert.notPropEqual(model.activityContact, model.submissionContact);

  model.sameAsActivity = true;
  route._copyContacts(model);
  assert.propEqual(model.activityContact, model.submissionContact);
});

test('it copies the liaison contact from the submission contact when flag set', function(assert) {
  const route = this.subject();
  const model = {submissionContact: {name: 'submission'}};

  route._copyContacts(model);
  assert.notPropEqual(model.liaisonContact, model.submissionContact);

  model.sameAsLiaison = true;
  route._copyContacts(model);
  assert.propEqual(model.liaisonContact, model.submissionContact);
});
