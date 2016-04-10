var VALID_DEPLOY_TARGETS = [ //update these to match what you call your deployment targets
  'prototype',
  'uat',
  'production'
];

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    s3: {
      // prefix: 'submissions-ui',
      region: 'ap-southeast-2'
    },
    's3-index': {
      region: 'ap-southeast-2',
      allowOverwrite: true
    },
    pipeline: {
      activateOnDeploy: true
    },
    build: {
      environment: 'production'
    }
  };

  if (VALID_DEPLOY_TARGETS.indexOf(deployTarget) === -1) {
    throw new Error('Invalid deployTarget ' + deployTarget);
  }

  ENV.s3.accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  ENV.s3.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
  ENV.s3.bucket = process.env.S3_BUCKET;
  ENV['s3-index'].accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  ENV['s3-index'].secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
  ENV['s3-index'].bucket = process.env.S3_BUCKET;

  return ENV;
}
