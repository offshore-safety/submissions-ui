import Ember from 'ember';
import _ from 'lodash/lodash';

const collectLeaves = function(node) {
  return _.flattenDeep(_.values(node).map(function(nodeValue) {
    if (_.isString(nodeValue)) {
      return nodeValue;
    } else if (nodeValue instanceof Object) {
      return collectLeaves(nodeValue);
    }
  }));
};

export default Ember.Mixin.create({
  errorMessages: Ember.computed('errors', function() {
    return collectLeaves(this.get('errors'));
  }),
  hasErrors: Ember.computed('errorMessages', function() {
    return !Ember.isEmpty(this.get('errorMessages'));
  })
});
