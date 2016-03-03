import _ from 'lodash';
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'p',
  classNames: ['hint'],
  classNameBindings: ['canExpand'],
  hint: null,
  expanded: false,
  hintText: Ember.computed('hint', function() {
    return (this.get('hint') || '').replace(/<[^>]+\>/gi, "");
  }),
  hintTextTruncated: Ember.computed('hintText', function() {
    return _.trunc(this.get('hintText'), { 
      length: 135,
      separator: ' '
    });
  }),
  canExpand: Ember.computed('hintText', 'hintTruncated', 'expanded', function() {
    return !this.get('expanded') && this.get('hintText').length > this.get('hintTextTruncated').length;
  }),
  click() {
    this.set('expanded', true);
  }
});
