import Ember from 'ember';
import moment from 'moment';

const dateFormat = 'dddd, MMMM Do YYYY';

export default Ember.Controller.extend({
  submissionReceived: Ember.computed('model.submissionReceived', function() {
    return moment(this.get('model').get('submissionReceived')).format(`${dateFormat}, h:mm:ss a`);
  }),
  documentNames: Ember.computed('model.attachments.length', function() {
    const attachments = this.get('model').get('attachments');

    return attachments.get('attachments').map((attachment) => attachment.get('name'));
  }),
  actions: {
    goHome() {
      this.transitionToRoute('welcome');
    }
  }
});
