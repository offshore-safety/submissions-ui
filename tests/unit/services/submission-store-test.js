import { moduleFor, test } from 'ember-qunit';

moduleFor('service:submission-store', 'Unit | Service | submission store', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

let storedSubmission = {};
let mockLocalStorage = {
  setItem(key, toStore) {
    storedSubmission[key] = toStore;
  },
  getItem(key) {
    return storedSubmission[key];
  }
};

test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('it saves a submission and retrieves it', function(assert) {
  let service = this.subject({localStorage: mockLocalStorage});
  let submission = {name: "blah", content: "more blah"};

  service.save(submission);

  let retrievedSubmission = service.retrieve();
  assert.equal(submission, retrievedSubmission);
});

// test('it stores the submission in local storage', function(assert) {
//   let service = this.subject();
//   let submission = {name: 'all the blahz', comment: 'No comment'};
//
//   service.save(submission);
//
//   let retrievedSubmission = JSON.parse(window.localStorage['submissions.partial']);
//   assert.equal(submission, retrievedSubmission);
// });
