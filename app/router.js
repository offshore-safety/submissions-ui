import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('styleguide');

  this.route('welcome', { path: '/' });

  this.route('environment-plan', function() {
    this.route('new', { path: '/new/:submissionId' }, function() {
      this.route('before-you-start');
      this.route('activity-details');
      this.route('titles');
      this.route('titleholder-details');
      this.route('submission-contact');
      this.route('activity-contact');
      this.route('liaison-contact');
      this.route('documents');
      this.route('financial-assurance');
      this.route('additional-info');
      this.route('review');
      this.route('confirmation');
    });
  });

  this.route('financial-assurance', { path: '/financial-assurance/:submissionId' }, function() {
    this.route('before-you-start');
    this.route('titles');
    this.route('titleholder-details');
    this.route('submission-contact');
    this.route('financial-assurance');
    this.route('additional-info');
    this.route('review');
    this.route('confirmation');
    this.route('forms', function() {
      this.route('fa-declaration');
      this.route('fa-confirmation');
    });
  });
});

export default Router;
