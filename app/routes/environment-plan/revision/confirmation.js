import Ember from 'ember';
import ClearModel from '../../../mixins/clear-model';

export default Ember.Route.extend(ClearModel, {
  submissionStatus: Ember.inject.service(),
  beforeModel() {
    this.get('submissionStatus').visiting(this.get('routeName'));
  }
});
