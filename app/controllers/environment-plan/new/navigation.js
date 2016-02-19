import Ember from 'ember';

export default Ember.Controller.extend({
  items: [
    {
      label: 'Before You Start',
      icon: 'info-circle',
      path: 'environment-plan.new.before-you-start',
      key: 'before-you-start',
      inverted: true
    },
    {
      label: 'Activity Details',
      path: 'environment-plan.new.activity-details',
      key: 'activityDetails'
    },
    {
      label: 'Titles',
      path: 'environment-plan.new.titles',
      key: 'titles'
    },
    {
      label: 'Titleholder Details',
      path: 'environment-plan.new.titleholder-details',
      key: 'titleholderDetails'
    },
    {
      label: 'Submission Contact',
      path: 'environment-plan.new.submission-contact',
      key: 'submissionContact'
    },
    {
      label: 'Nominated Liaison',
      path: 'environment-plan.new.liaison-contact',
      key: 'liaisonContact'
    },
    {
      label: 'Activity Contact',
      path: 'environment-plan.new.activity-contact',
      key: 'activityContact'
    },
    {
      label: 'Documents',
      path: 'environment-plan.new.documents',
      key: 'documents'
    },
    {
      label: 'Financial Assurance',
      path: 'environment-plan.new.financial-assurance',
      key: 'financialAssurance'
    },
    {
      label: 'Additional Info',
      path: 'environment-plan.new.additional-info',
      key: 'additionalInfo'
    },
    {
      label: 'Review & Submit',
      path: 'environment-plan.new.review',
      key: 'review',
      inverted: true
    }
  ]
});
