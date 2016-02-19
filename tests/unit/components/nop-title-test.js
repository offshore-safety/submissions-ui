import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('nop-title', 'Unit | Component | nop title', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('regions has all options if commonwealthWaters is empty', function(assert) {
  const component = this.subject();
  assert.equal(component.commonwealthWaters, [
    {id: 1, text: 'Ashmore Cartier Island'},
    {id: 2, text: 'New South Wales'},
    {id: 3, text: 'Northern Territory'},
    {id: 4, text: 'Queensland'},
    {id: 5, text: 'South Australia'},
    {id: 6, text: 'Tasmania'},
    {id: 7, text: 'Victoria'},
    {id: 8, text: 'Western Australia'},
  ]);
});
skip('regions has only WA regions if commonwealthWaters is WA', function(assert) {
});
skip('regions refills with the region if there is only one for the given commonwealthWaters', function(assert) {
});
