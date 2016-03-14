import Ember from 'ember';
import moment from 'moment';

const dateFormat = 'dddd, MMMM Do YYYY';

export default Ember.Controller.extend({
  submissionReceived: Ember.computed('model.submissionReceived', function() {
    return moment(this.get('model').get('submissionReceived')).format(`${dateFormat}, h:mm:ss a`);
  }),
  documentNames: Ember.computed('model.attachment', function() {
    const attachment = this.get('model').get('attachment');

    return [attachment.get('attachment').get('name')];
  }),
  actions: {
    goHome() {
      this.transitionToRoute('welcome');
    }
  }
});
