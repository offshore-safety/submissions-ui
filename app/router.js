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
      this.route('submit');
      this.route('confirmation');
    });
  });
});

export default Router;
