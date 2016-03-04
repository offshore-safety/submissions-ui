import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-declaration-options',
  classNameBindings: ['readonly'],
  showSingleDeclaration: Ember.computed('declarationOptions.declarationOption', function() {
    return this.get('declarationOptions').get('declarationOption') === 'declarationOption1';
  }),
  showMultipleDeclaration: Ember.computed('declarationOptions.declarationOption', function() {
    return this.get('declarationOptions').get('declarationOption') === 'declarationOption2';
  }),
  showMultiSingleDeclaration: Ember.computed('declarationOptions.declarationOption', function() {
    return this.get('declarationOptions').get('declarationOption') === 'declarationOption3';
  })
});
