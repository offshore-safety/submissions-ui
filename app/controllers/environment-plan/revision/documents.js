import Ember from 'ember';
import NavigationControl from '../../../mixins/navigation-control';

export default Ember.Controller.extend(NavigationControl, {
  back: 'environment-plan.revision.activity-contact',
  next: 'environment-plan.revision.financial-assurance'
});
