import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('nop-fa-declaration', 'Unit | Component | nop fa declaration', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test("it does not show submit when we don't know whether the FA declaration has already been submitted", function(assert) {
  let component = this.subject({submission: {documents: {faDeclaration: {}}}});
  assert.notOk(component.get('showSubmit'));
});

test('it does not show submit when the FA declaration has already been submitted', function(assert) {
  let component = this.subject({submission: {documents: {faDeclaration:{alreadySubmitted: true}}}});
  assert.notOk(component.get('showSubmit'));
});

test('it shows submit when the FA declaration has not already been submitted', function(assert) {
  let component = this.subject({submission: {documents: {faDeclaration:{alreadySubmitted: false}}}});
  assert.ok(component.get('showSubmit'));
});
