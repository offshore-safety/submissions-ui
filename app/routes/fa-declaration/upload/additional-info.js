import Ember from 'ember';
import ResetScroll from '../../../mixins/reset-scroll';
import SubmissionState from '../../../mixins/submission-state';

export default Ember.Route.extend(ResetScroll, SubmissionState, {
  _pageModel() {
    return this.get('currentModel').get('additionalInfo');
  }
});
