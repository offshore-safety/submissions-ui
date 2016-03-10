import Ember from 'ember';
import NavigationControl from '../../../mixins/navigation-control';

export default Ember.Controller.extend(NavigationControl, {
  next: 'environment-plan.revision.additional-info',
  back: 'environment-plan.revision.documents'
});
