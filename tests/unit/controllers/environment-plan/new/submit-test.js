import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:environment-plan/new/submit', 'Unit | Controller | environment plan/new/submit', {
});

test('it redirects to bad-gateway when submitting results in a 502 status', function(assert){
  assert.expect(1);

  let result = {statusCode: () => 502};
  let promise = new Ember.RSVP.Promise(function(resolve, reject) {
    reject(result);
  });

  let mockSubmitatron = {submit: () => {return promise;}};
  var controller = this.subject({submitatron: mockSubmitatron});

  controller.transitionToRoute = () => {
    assert.ok(true);
  };

  controller.send('submit', {});
});
