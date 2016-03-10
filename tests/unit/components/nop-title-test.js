import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';
import ActivityMapping from 'submissions-ui/models/activity-mapping';

moduleForComponent('nop-title', 'Unit | Component | nop title', {
  // Specify the other units that are required for this test
  needs: ['model:activity-mapping'],
  unit: true
});

test('it can merge the total list of activity types with the current list', function(assert) {
  let activityTypes = [
    ActivityMapping.create({type: '1001'}),
    ActivityMapping.create({type: '1002'})
  ];

  let existingMappings = [
    ActivityMapping.create({type: '1001'}),
    ActivityMapping.create({type: '1003'})
  ];

  let title = Ember.Object.create({activityMappings: existingMappings});

  let component = this.subject({title, activityTypes});

  let expectedResult = [
    ActivityMapping.create({type: '1001'}),
    ActivityMapping.create({type: '1002'})
  ].map((r) => r.serialize());

  let result = component._mergedActivityMappings(activityTypes, existingMappings).map((r) => r.serialize());

  assert.equal(JSON.stringify(result), JSON.stringify(expectedResult));
});
