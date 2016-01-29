import { moduleFor, test } from 'ember-qunit';

moduleFor('service:validations/activity-description', 'Unit | Service | validations/activity description', {
});

test('name must be specified and more than 3 characters', function(assert) {
  let service = this.subject();

  assert.ok(service.validate({})['name']);
  assert.ok(service.validate({name: 'AA'})['name']);
  assert.notOk(service.validate({name: 'AAA'})['name']);
});

test('description must be specified and more than 100 words', function(assert) {
  let service = this.subject();
  const ONE_HUNDRED_WORDS = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere ipsum arcu, id aliquet neque porta sed. Suspendisse rutrum orci id mi consectetur auctor. Nulla eget sodales urna. Donec quis fermentum ligula. Donec vestibulum efficitur massa, sed vehicula eros volutpat nec. Praesent eget ipsum vulputate, pulvinar tortor vitae, facilisis leo. Maecenas volutpat auctor ante, non molestie velit commodo ac. Integer ultrices mauris nulla, eget lobortis tellus maximus sed. Ut malesuada leo vel purus mattis, in euismod enim iaculis. Nunc eu purus vel enim congue hendrerit nec feugiat diam. Maecenas non interdum dui. Phasellus vulputate mi vel maximus pharetra. Nam a.";

  assert.ok(service.validate({})['description']);
  assert.ok(service.validate({description: 'AA'})['description']);
  assert.notOk(service.validate({description: ONE_HUNDRED_WORDS})['description']);
});

test('regulation type must be specified', function(assert) {
  let service = this.subject();

  assert.ok(service.validate({})['regulationType']);
  assert.notOk(service.validate({regulationType: 'petroleum'})['regulationType']);
});

test('a location map must be provided', function(assert) {
  let service = this.subject();

  assert.ok(service.validate({})['documents.locationMap.token']);
  assert.ok(service.validate({documents: {}})['documents.locationMap.token']);
  assert.ok(service.validate({documents: {locationMap: {}}})['documents.locationMap.token']);
  assert.notOk(service.validate({documents: {locationMap: {token: 'token'}}})['documents.locationMap.token']);
});
