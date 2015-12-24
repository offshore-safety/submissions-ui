import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addAttachment() {
      this.get('model').documents.attachments.pushObject({});
    },
    goNext() {
      this.transitionToRoute('environment-plan.new.comments');
    },
    goBack() {
      this.transitionToRoute('environment-plan.new.fa-confirmation');
    }
  }
});
