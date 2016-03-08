import Ember from 'ember';

export default Ember.Controller.extend({
  items: [
    {
      label: 'Before You Start',
      icon: 'info',
      path: 'fa-confirmation.upload.before-you-start',
      key: 'before-you-start',
      inverted: true
    },
    {
      label: 'Submission Contact',
      path: 'fa-confirmation.upload.submission-contact',
      key: 'submissionContact'
    },
    {
      label: 'Attachment',
      path: 'fa-confirmation.upload.attachment',
      key: 'attachment'
    },
    {
      label: 'Additional Info',
      path: 'fa-confirmation.upload.additional-info',
      key: 'additionalInfo'
    },
    {
      label: 'Review & Submit',
      icon: 'share',
      path: 'fa-confirmation.upload.review',
      key: 'review'
    }
  ]
});
