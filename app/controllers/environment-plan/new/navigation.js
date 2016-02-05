import Ember from 'ember';

export default Ember.Controller.extend({
  items: [
    {
      name: 'Activity Description',
      paths: ['environment-plan.new.activity-description']
    },
    {
      name: 'Titles',
      paths: ['environment-plan.new.titles']
    },
    {
      name: 'Activity Types',
      paths: ['environment-plan.new.activity-types']
    },
    {
      name: 'Titleholder Details',
      paths: ['environment-plan.new.titleholder-details']
    },
    {
      name: 'Contact Details',
      paths: ['environment-plan.new.submission-contact', 'environment-plan.new.liaison-contact', 'environment-plan.new.activity-contact']
    },
    {
      name: 'Environment Plan',
      paths: ['environment-plan.new.attach-environment-plan']
    },
    {
      name: 'FA Declaration',
      paths: ['environment-plan.new.fa-declaration']
    },
    {
      name: 'FA Confirmation',
      paths: ['environment-plan.new.fa-confirmation']
    },
    {
      name: 'Attachments',
      paths: ['environment-plan.new.attachments']
    },
    {
      name: 'Comments',
      paths: ['environment-plan.new.comments']
    },
    {
      name: 'Additional Emails',
      paths: ['environment-plan.new.confirmation-emails']
    },
    {
      name: 'Review',
      paths: ['environment-plan.new.submit']
    }
  ]
});
