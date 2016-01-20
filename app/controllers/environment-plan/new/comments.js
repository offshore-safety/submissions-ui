import Ember from 'ember';
import SubmissionValidations from '../../../mixins/validations/submission';

export default Ember.Controller.extend(SubmissionValidations, {
  actions: {
    goNext() {
      this.validate().catch(() => {
        console.log(this.get("errors"));
      }).finally(() => {
        this.transitionToRoute('environment-plan.new.submit');
      })
    },
    goBack() {
      this.validate().catch(() => {
        console.log(this.get("errors"));
      }).finally(() => {
        this.transitionToRoute('environment-plan.new.attachments');
      })
    }
  }
});
