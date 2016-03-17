import Ember from 'ember';
import Constants from '../constants';

export default Ember.Component.extend({
  tagName: 'nop-declaration-options',
  classNameBindings: ['readonly', 'visited'],
  visited: Ember.computed('declarationOptions.visited', function() {
    return this.get('declarationOptions').get('visited');
  }),
  selectedDeclarationOption: Ember.computed('declarationOptions.declarationOption', function() {
    return Constants.DECLARATION_OPTIONS[this.get('declarationOptions').get('declarationOption')];
  }),
  selectedSignatoryType: Ember.computed('declarationOptions.signatoryType', function() {
    return Constants.SIGNATORY_TYPES[this.get('declarationOptions').get('signatoryType')];
  }),
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
