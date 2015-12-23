import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('styleguide');

  this.route('environment-plan', function() {
    this.route('new', function() {
      this.route('before-you-start');
      this.route('activity-description');
      this.route('submission-contact');
      this.route('activity-contact');
      this.route('submit');
      this.route('confirmation');
      this.route('liaison-contact');
      this.route('comments');
      this.route('titleholder-details');
      this.route('attach-environment-plan');
      this.route('titles');
      this.route('attachments');
      this.route('fa-declaration');
    });
  });

  this.route('errors', function() {
    this.route('bad-gateway');
  });

  this.route('environment-plna', function() {
    this.route('new', function() {});
  });
});

export default Router;
