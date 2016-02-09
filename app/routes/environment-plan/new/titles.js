import Ember from 'ember';
import ResetScroll from '../../../mixins/reset-scroll';
import _ from 'lodash/lodash';

const collectLeaves = function(node) {
  return _.flattenDeep(_.values(node).map(function(nodeValue) {
    if (_.isString(nodeValue)) {
      return nodeValue;
    } else if (nodeValue instanceof Object) {
      return collectLeaves(nodeValue);
    }
  }));
}

export default Ember.Route.extend(ResetScroll,{
  submissionStatus: Ember.inject.service(),
  model() {
    const store = this.store;
    const promise = new Ember.RSVP.Promise(function(resolve) {
      const recordFound = (existing) => resolve(existing);
      const recordNotFound = () => resolve(store.createRecord('title-list', {}));
      store.findRecord('title-list', 'lhfn0').then(recordFound, recordNotFound);
    });

    return promise;
  },
  actions: {
    willTransition(transition) {
      const titleList = this.get('currentModel');
      titleList.save();
      titleList.get('titles').forEach(function(title) {
        title.save();
      });
      const errors = titleList.get('errors');
      const errorMessages = collectLeaves(errors);
      if (!Ember.isEmpty(errorMessages)) {
        if (!confirm('There are errors on this page, do you want to come back to them later?')) {
          transition.abort();
        }
      }
      this.get('submissionStatus').leaving('title-list', errorMessages);
    },
    addTitle() {
      const titleList = this.get('currentModel');
      const newTitle = this.store.createRecord('title', {
        titleList
      });
      newTitle.save();
      titleList.get('titles').pushObject(newTitle);
      titleList.save();
    }
  }
});
