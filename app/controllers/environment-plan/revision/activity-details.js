import Ember from 'ember';
import NavigationControl from '../../../mixins/navigation-control';

export default Ember.Controller.extend(NavigationControl, {
  next: 'environment-plan.revision.titles',
  back: 'environment-plan.revision.before-you-start'
});
