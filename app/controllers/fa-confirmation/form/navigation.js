import Ember from 'ember';

export default Ember.Controller.extend({
  items: [
    {
      label: 'Before You Start',
      icon: 'info',
      path: 'fa-confirmation.form.before-you-start',
      key: 'before-you-start',
      inverted: true
    },
    {
      label: 'Titles',
      path: 'fa-confirmation.form.titles',
      key: 'titles'
    },
    {
      label: 'Titleholder Details',
      path: 'fa-confirmation.form.titleholder-details',
      key: 'titleholderDetails'
    },
    {
      label: 'Confirmation Details',
      path: 'fa-confirmation.form.confirmation-details',
      key: 'confirmationDetails'
    },
    {
      label: 'Review & Print',
      icon: 'share',
      path: 'fa-confirmation.form.review',
      key: 'review'
    }
  ]
});
