import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-financial-assurance',
  trueOrFalse: [
    {label: 'Yes', value: true},
    {label: 'No', value: false}
  ],
  noPreviousDeclaration: Ember.computed('assurance.previousDeclaration', function() {
    return this.get('assurance').get('previousDeclaration') === false;
  }),
  classNameBindings: ['visited'],
  visited: Ember.computed('assurance.visited', function() {
    return this.get('assurance').get('visited');
  }),
});
