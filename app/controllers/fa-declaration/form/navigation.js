import Ember from 'ember';

export default Ember.Controller.extend({
  items: [
    {
      label: 'Before You Start',
      icon: 'info',
      path: 'fa-declaration.form.before-you-start',
      key: 'before-you-start',
      inverted: true
    },
    {
      label: 'Titles',
      path: 'fa-declaration.form.titles',
      key: 'titles'
    },
    {
      label: 'Titleholder Details',
      path: 'fa-declaration.form.titleholder-details',
      key: 'titleholderDetails'
    },
    {
      label: 'Review & Print',
      icon: 'share',
      path: 'fa-declaration.form.review',
      key: 'review'
    }
  ]
});
