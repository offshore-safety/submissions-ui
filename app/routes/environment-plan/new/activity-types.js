import Ember from 'ember';
import _ from 'lodash/lodash';
import ResetScroll from '../../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  submissionStore: Ember.inject.service(),
  model() {
    return this.get('submissionStore').retrieve();
  },
  actions: {
    willTransition() {
      const currentModel = this.get('currentModel');
      _.remove(_.rest(currentModel.activityTypes, 1), (a) => !a.token);

      this.get('submissionStore').save(currentModel);
    }
  }
});
