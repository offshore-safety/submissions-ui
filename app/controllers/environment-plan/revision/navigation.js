import Ember from 'ember';

export default Ember.Controller.extend({
  items: [
    {
      label: 'Before You Start',
      icon: 'info',
      path: 'environment-plan.revision.before-you-start',
      key: 'before-you-start',
      inverted: true
    },
    {
      label: 'Revision Type',
      path: 'environment-plan.revision.revision-type',
      key: 'revisionType'
    },
    {
      label: 'Activity Details',
      path: 'environment-plan.revision.activity-details',
      key: 'activityDetails'
    },
    {
      label: 'Titles',
      path: 'environment-plan.revision.titles',
      key: 'titles'
    },
    {
      label: 'Titleholder Details',
      path: 'environment-plan.revision.titleholder-details',
      key: 'titleholderDetails'
    },
    {
      label: 'Submission Contact',
      path: 'environment-plan.revision.submission-contact',
      key: 'submissionContact'
    },
    {
      label: 'Nominated Liaison',
      path: 'environment-plan.revision.liaison-contact',
      key: 'liaisonContact'
    },
    {
      label: 'Activity Contact',
      path: 'environment-plan.revision.activity-contact',
      key: 'activityContact'
    },
    {
      label: 'Documents',
      path: 'environment-plan.revision.documents',
      key: 'documents'
    },
    {
      label: 'Financial Assurance',
      path: 'environment-plan.revision.financial-assurance',
      key: 'financialAssurance'
    },
    {
      label: 'Additional Info',
      path: 'environment-plan.revision.additional-info',
      key: 'additionalInfo'
    },
    {
      label: 'Review & Submit',
      icon: 'share',
      path: 'environment-plan.revision.review',
      key: 'review'
    }
  ]
});
