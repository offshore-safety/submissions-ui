import { moduleFor, test } from 'ember-qunit';

moduleFor('service:submission-store', 'Unit | Service | submission store', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('it saves a submission and retrieves it from local storage', function(assert) {
  let savedSubmission = null;
  let mockLocalStorage = {setItem: (k, v) => savedSubmission = v, getItem: () => savedSubmission};
  let service = this.subject({localStorage: mockLocalStorage});
  let submission = {name: "blah", content: "more blah"};

  service.save(submission);

  let retrievedSubmission = service.retrieve();
  assert.equal(submission, retrievedSubmission);
});

test('it returns a blank object when there isn\'t one already', function(assert) {
  let mockLocalStorage = {getItem: () => null};
  let service = this.subject({localStorage: mockLocalStorage});

  let defaultSubmission = service.retrieve();

  assert.equal(JSON.stringify(defaultSubmission), JSON.stringify({}));
});
