import Ember from 'ember';
import NavigationControl from '../../../mixins/navigation-control';

export default Ember.Controller.extend(NavigationControl, {
  back: 'environment-plan.new.activity-contact',
  next: 'environment-plan.new.financial-assurance'
});
