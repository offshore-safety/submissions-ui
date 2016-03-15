import Ember from 'ember';
import NavigationControl from '../../../mixins/navigation-control';

export default Ember.Controller.extend(NavigationControl, {
  back: 'fa-declaration.upload.submission-contact',
  next: 'fa-declaration.upload.additional-info'
});
