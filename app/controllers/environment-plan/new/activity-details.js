import Ember from 'ember';
import NavigationControl from '../../../mixins/navigation-control';

export default Ember.Controller.extend(NavigationControl, {
  next: 'environment-plan.new.titles',
  back: 'environment-plan.new.before-you-start'
});
