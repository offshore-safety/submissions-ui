import { moduleFor, test } from 'ember-qunit';

moduleFor('service:levy-calculation', 'Unit | Service | levy calculation', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('it calculates the activity amount for a linkedActivityType', function(assert) {
  const unitValue = 3960;

  const activityRatings = {
    '1001': 25
  };

  const linkedActivityType = {
    type: '1001',
    expectedDuration: 4,
    durationUnits: 'years'
  };

  let service = this.subject({activityRatings, unitValue});

  let result = service.activityAmountFor(linkedActivityType);
  assert.equal(result, 99000);
});

test('it calculates the compliance amount for a linkedActivityType', function(assert) {
  const unitValue = 3960;

  const complianceRatings = {
    '1001': 22
  };

  const linkedActivityType = {
    type: '1001',
    expectedDuration: 4,
    durationUnits: 'years'
  };

  let service = this.subject({complianceRatings, unitValue});

  let result = service.complianceAmountFor(linkedActivityType);
  assert.equal(result, 348480);
});

test('it rounds up months to the nearest whole year', function(assert) {
  const linkedActivityType = {
    type: '1001',
    expectedDuration: 4,
    durationUnits: 'months'
  };

  let service = this.subject();

  let result = service._expectedDurationInYears(linkedActivityType);
  assert.equal(result, 1);

  linkedActivityType.expectedDuration = 13;
  result = service._expectedDurationInYears(linkedActivityType);
  assert.equal(result, 2);
});

test('it rounds up days to the nearest whole year', function(assert) {
  const linkedActivityType = {
    type: '1001',
    expectedDuration: 4,
    durationUnits: 'days'
  };

  let service = this.subject();

  let result = service._expectedDurationInYears(linkedActivityType);
  assert.equal(result, 1);

  linkedActivityType.expectedDuration = 370;
  result = service._expectedDurationInYears(linkedActivityType);
  assert.equal(result, 2);
});

test('it concatenates everything together with a top level levies call', function(assert) {
  const unitValue = 1;

  const activityRatings = {
    '1001': 2
  };

  const complianceRatings = {
    '1001': 4
  };

  const linkedActivityType = {
    type: '1001',
    expectedDuration: 2,
    durationUnits: 'years'
  };

  let service = this.subject({unitValue, activityRatings, complianceRatings});

  let result = service.calculateLeviesFor(linkedActivityType);

  assert.equal(result.activity, 2);
  assert.equal(result.compliance, 8);
  assert.equal(result.total, 10);
});
