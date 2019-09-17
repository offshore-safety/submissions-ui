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
    ENV.APP.API_ENDPOINT = 'http://52.220.243.241:60000'
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
    ENV.APP.API_ENDPOINT = 'http://onsub-api-proto.online.nopsema.gov.au'
  }

  if (deployTarget === 'uat') {
    ENV.APP.API_ENDPOINT = 'https://onsub-api-uat.online.nopsema.gov.au'
  }

  if (deployTarget === 'production') {
    ENV.APP.API_ENDPOINT = 'https://onsub-api-prod.online.nopsema.gov.au'
  }

  return ENV;
};
