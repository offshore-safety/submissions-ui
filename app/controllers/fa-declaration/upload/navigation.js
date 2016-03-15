import Ember from 'ember';

export default Ember.Controller.extend({
  items: [
    {
      label: 'Before You Start',
      icon: 'info',
      path: 'fa-declaration.upload.before-you-start',
      key: 'before-you-start',
      inverted: true
    },
    {
      label: 'Submission Contact',
      path: 'fa-declaration.upload.submission-contact',
      key: 'submissionContact'
    },
    {
      label: 'Attachments',
      path: 'fa-declaration.upload.attachments',
      key: 'attachments'
    },
    {
      label: 'Additional Info',
      path: 'fa-declaration.upload.additional-info',
      key: 'additionalInfo'
    },
    {
      label: 'Review & Submit',
      icon: 'share',
      path: 'fa-declaration.upload.review',
      key: 'review'
    }
  ]
});
