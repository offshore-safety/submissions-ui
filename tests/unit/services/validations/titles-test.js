import { moduleFor, test } from 'ember-qunit';

moduleFor('service:validations/titles', 'Unit | Service | validations/activity description', {
});

test('at least one title must be specified', function(assert) {
  let service = this.subject();

  assert.ok(service.validate({})['titles']);
  assert.ok(service.validate({titles: []})['titles']);
  assert.notOk(service.validate({titles: [{}]})['titles']);
});

test('a title must have a title or application number of at least 3 characters', function(assert) {
  let service = this.subject();

  assert.ok(service.validate({titles: [{}]})['titles.0.titleOrApplicationNumber']);
  assert.ok(service.validate({titles: [{titleOrApplicationNumber: 'AA'}]})['titles.0.titleOrApplicationNumber']);
  assert.notOk(service.validate({titles: [{titleOrApplicationNumber: 'T/L1'}]})['titles.0.titleOrApplicationNumber']);
});

test('a title must have a region', function(assert) {
  let service = this.subject();

  assert.ok(service.validate({titles: [{}]})['titles.0.region']);
  assert.notOk(service.validate({titles: [{region: 'Great Southern'}]})['titles.0.region']);
});

test('a title must specify Commonwealth Waters', function(assert) {
  let service = this.subject();

  assert.ok(service.validate({titles: [{}]})['titles.0.commonwealthWaters']);
  assert.notOk(service.validate({titles: [{commonwealthWaters: 'Western Australia'}]})['titles.0.commonwealthWaters']);
});
