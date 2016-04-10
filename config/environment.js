/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'submissions-ui',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };


  if (environment === 'development') {
    ENV.APP.API_ENDPOINT = 'http://nopsema-api.dev'
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
  }

  var deployTarget = process.env.DEPLOY_TARGET;
  if (deployTarget === 'prototype') {
    ENV.APP.API_ENDPOINT = 'http://10.0.1.243'
  }

  if (deployTarget === 'uat') {
    ENV.APP.API_ENDPOINT = 'http://54.206.78.36'
  }

  if (deployTarget === 'production') {
    ENV.APP.API_ENDPOINT = 'http://54.206.4.147'
  }

  return ENV;
};
