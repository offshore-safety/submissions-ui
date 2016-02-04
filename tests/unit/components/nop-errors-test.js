import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('nop-errors', 'Unit | Component | nop errors', {
  unit: true
});

test('it extracts error messages from errors', function(assert) {
  let errors = {
    'monkeys': 'Monkeys are vital',
    'dogs': 'Dogs too'
  };

  let component = this.subject({errors: errors});
  component.init();

  assert.equal(errors['monkeys'], component.errorMessages[0]);
  assert.equal(errors['dogs'], component.errorMessages[1]);
  assert.equal(2, component.errorMessages.length);
});
