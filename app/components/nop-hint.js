import _ from 'lodash';
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'p',
  classNames: ['hint'],
  classNameBindings: ['canExpand'],
  hint: null,
  expanded: false,
  hintTruncated: Ember.computed('hint', function() {
    return _.trunc(this.get('hint'), { 
      length: 100,
      separator: ' '
    });
  }),
  canExpand: Ember.computed('hint', 'hintTruncated', 'expanded', function() {
    return !this.get('expanded') && this.get('hint') && this.get('hint').length > this.get('hintTruncated').length;
  }),
  click() {
    this.set('expanded', true);
  }
});
