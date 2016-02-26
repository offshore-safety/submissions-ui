import Ember from 'ember';

export default Ember.Controller.extend({
  items: [
    {
      label: 'Before You Start',
      icon: 'info',
      path: 'financial-assurance.before-you-start',
      key: 'before-you-start',
      inverted: true
    },
    {
      label: 'Titles',
      path: 'financial-assurance.titles',
      key: 'titles'
    },
    {
      label: 'Titleholder Details',
      path: 'financial-assurance.titleholder-details',
      key: 'titleholderDetails'
    },
    {
      label: 'Submission Contact',
      path: 'financial-assurance.submission-contact',
      key: 'submissionContact'
    },
    {
      label: 'Financial Assurance',
      path: 'financial-assurance.financial-assurance',
      key: 'financialAssurance'
    },
    {
      label: 'Additional Info',
      path: 'financial-assurance.additional-info',
      key: 'additionalInfo'
    },
    {
      label: 'Review & Submit',
      icon: 'share',
      path: 'financial-assurance.review',
      key: 'review'
    }
  ]
});
