import Ember from 'ember';

export default Ember.Controller.extend({
  items: [
    {
      name: 'Activity Description',
      paths: ['environment-plan.new.activity-description'],
      validators: ['activityDescription'],
    },
    {
      name: 'Titles',
      paths: ['environment-plan.new.titles'],
      validators: ['titles']
    },
    {
      name: 'Activity Types',
      paths: ['environment-plan.new.activity-types'],
      validators: ['activityTypes']
    },
    {
      name: 'Titleholder Details',
      paths: ['environment-plan.new.titleholder-details'],
      validators: ['titleholderDetails']
    },
    {
      name: 'Contact Details',
      paths: ['environment-plan.new.submission-contact', 'environment-plan.new.liaison-contact', 'environment-plan.new.activity-contact'],
      validators: ['submissionContact', 'liaisonContact', 'activityContact']
    },
    {
      name: 'Environment Plan',
      paths: ['environment-plan.new.attach-environment-plan'],
      validators: ['environmentPlan']
    },
    {
      name: 'FA Declaration',
      paths: ['environment-plan.new.fa-declaration'],
      validators: ['faDeclaration']
    },
    {
      name: 'FA Confirmation',
      paths: ['environment-plan.new.fa-confirmation'],
      validators: ['faConfirmation']
    },
    {
      name: 'Attachments',
      paths: ['environment-plan.new.attachments'],
      validators: ['attachments']
    },
    {
      name: 'Comments',
      paths: ['environment-plan.new.comments'],
      validators: []
    },
    {
      name: 'Additional Emails',
      paths: ['environment-plan.new.confirmation-emails'],
      validators: []
    },
    {
      name: 'Review',
      paths: ['environment-plan.new.submit'],
      validators: [
        'activityDescription',
        'titles',
        'activityTypes',
        'titleholderDetails',
        'environmentPlan',
        'faDeclaration',
        'faConfirmation',
        'attachments'
      ]
    }
  ]
});
