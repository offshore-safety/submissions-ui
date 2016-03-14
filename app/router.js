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

    this.route('revision', { path: '/revision/:submissionId' }, function() {
      this.route('before-you-start');
      this.route('revision-type');
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

  this.route('fa-declaration', function() {
    this.route('form', { path: '/form/:submissionId' }, function() {
      this.route('before-you-start');
      this.route('titles');
      this.route('titleholder-details');
      this.route('declaration-options');
      this.route('review');
    });

    this.route('upload', { path: '/upload/:submissionId' }, function() {
      this.route('before-you-start');
      this.route('submission-contact');
      this.route('attachment');
      this.route('additional-info');
      this.route('review');
      this.route('confirmation');
    });
  });

  this.route('fa-confirmation', function() {
    this.route('form', { path: '/form/:submissionId' }, function() {
      this.route('before-you-start');
      this.route('titles');
      this.route('titleholder-details');
      this.route('confirmation-details');
      this.route('review');
    });

    this.route('upload', { path: '/upload/:submissionId' }, function() {
      this.route('before-you-start');
      this.route('submission-contact');
      this.route('attachment');
      this.route('additional-info');
      this.route('review');
      this.route('confirmation');
    });
  });
});

export default Router;
