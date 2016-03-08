import Ember from 'ember';
import NavigationControl from '../../../mixins/navigation-control';

export default Ember.Controller.extend(NavigationControl, {
  back: 'fa-confirmation.upload.submission-contact',
  next: 'fa-confirmation.upload.additional-info',
});
