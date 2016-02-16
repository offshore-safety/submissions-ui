import Ember from 'ember';

export default Ember.Controller.extend({
  items: [
    {
      label: 'Before You Start',
      path: 'environment-plan.new.before-you-start',
      key: 'before-you-start'
    },
    {
      label: 'Activity Details',
      path: 'environment-plan.new.activity-description',
      key: 'activity-details'
    },
    {
      label: 'Titles',
      path: 'environment-plan.new.titles',
      key: 'title-list'
    },
    {
      label: 'Titleholder Details',
      path: 'environment-plan.new.titleholder-details',
      key: 'titleholder-details'
    },
    {
      label: 'Submission Contact',
      path: 'environment-plan.new.submission-contact',
      key: 'submission-contact'
    },
    {
      label: 'Nominated Liaison',
      path: 'environment-plan.new.liaison-contact',
      key: 'liaison-contact'
    },
    {
      label: 'Activity Contact',
      path: 'environment-plan.new.activity-contact',
      key: 'activity-contact'
    },
    {
      label: 'Documents',
      path: 'environment-plan.new.documents',
      key: 'documents'
    },
    {
      label: 'Financial Assurance',
      path: 'environment-plan.new.financial-assurance',
      key: 'financial-assurance'
    },
    {
      label: 'Additional Info',
      path: 'environment-plan.new.additional-info',
      key: 'additional-info'
    },
    {
      label: 'Review',
      path: 'environment-plan.new.submit',
      key: 'review'
    }
  ]
});
