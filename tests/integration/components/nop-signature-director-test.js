import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nop-signature-director', 'Integration | Component | nop signature director', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{nop-signature-director}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#nop-signature-director}}
      template block text
    {{/nop-signature-director}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
