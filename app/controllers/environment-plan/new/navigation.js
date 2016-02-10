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
      label: 'Activity Types',
      path: 'environment-plan.new.activity-types',
      key: 'activity-types'
    },
    {
      label: 'Titleholder Details',
      path: 'environment-plan.new.titleholder-details',
      key: 'titeholder-details'
    },
    {
      label: 'Submission Contact',
      path: 'environment-plan.new.submission-contact',
      key: 'submission-contact'
    },
    {
      label: 'Nominated Liaison',
      path: 'environment-plan.new.liaison-contact',
      key: 'nominated-liaison'
    },
    {
      label: 'Activity Contact',
      path: 'environment-plan.new.activity-contact',
      key: 'activity-contact'
    },
    {
      label: 'Documents',
      path: 'environment-plan.new.attach-environment-plan',
      key: 'documents'
    },
    {
      label: 'Financial Assurance',
      path: 'environment-plan.new.fa-declaration',
      key: 'financial-assurance'
    },
    {
      label: 'Additional Info',
      path: 'environment-plan.new.comments',
      key: 'additional-info'
    },
    {
      label: 'Review',
      path: 'environment-plan.new.submit',
      key: 'review'
    }
  ]
});
