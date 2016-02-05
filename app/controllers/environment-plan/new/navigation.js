import Ember from 'ember';

export default Ember.Controller.extend({
  items: [
    {
      name: 'Activity Description',
      link: 'environment-plan.new.activity-description'
    },
    {
      name: 'Titles',
      link: 'environment-plan.new.titles'
    },
    {
      name: 'Activity Types',
      link: 'environment-plan.new.activity-types'
    },
    {
      name: 'Titleholder Details',
      link: 'environment-plan.new.titleholder-details'
    },
    {
      name: 'Contact Details',
      link: 'environment-plan.new.submission-contact'
    },
    {
      name: 'Environment Plan',
      link: 'environment-plan.new.attach-environment-plan'
    },
    {
      name: 'FA Declaration',
      link: 'environment-plan.new.fa-declaration'
    },
    {
      name: 'FA Confirmation',
      link: 'environment-plan.new.fa-confirmation'
    },
    {
      name: 'Attachments',
      link: 'environment-plan.new.attachments'
    },
    {
      name: 'Comments',
      link: 'environment-plan.new.comments'
    },
    {
      name: 'Additional Emails',
      link: 'environment-plan.new.confirmation-emails'
    }
  ]
});
