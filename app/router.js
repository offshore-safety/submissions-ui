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
    this.route('titleholder-details');
  });
});

export default Router;
