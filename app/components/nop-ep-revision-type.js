import Ember from 'ember';
import _ from 'lodash/lodash';
import Constants from '../constants';

export default Ember.Component.extend({
  tagName: 'nop-ep-revision-type',
  classNameBindings: ['errors', 'visited'],
  visited: Ember.computed('revisionType.visited', function() {
    return this.get('revisionType').get('visited');
  }),
  revisionTypes: _.keys(Constants.REVISION_TYPES).map((k, index) => {return {value: k, label: Constants.REVISION_TYPES[k], name: `revision-type-${index}`};}),
  chosenRevisionType: Ember.computed('revisionType.revisionType', function() {
    return Constants.REVISION_TYPES[this.get('revisionType').get('revisionType')];
  })
});
