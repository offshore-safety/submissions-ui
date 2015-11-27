import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('styleguide');

  this.route('prototype', function() {
    this.route('before-you-start');
    this.route('activity-description');
    this.route('person-details');
    this.route('title-holder-details');
    this.route('offshore-project');
  });

  this.route('environment-plan', function() {
    this.route('new', function() {
      this.route('before-you-start');
      this.route('activity-description');
      this.route('submission-contact');
    });
  });
});

export default Router;
