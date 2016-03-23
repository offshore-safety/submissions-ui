var VALID_DEPLOY_TARGETS = [ //update these to match what you call your deployment targets
  'development',
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
    cloudfront: {}
  };
  if (VALID_DEPLOY_TARGETS.indexOf(deployTarget) === -1) {
    throw new Error('Invalid deployTarget ' + deployTarget);
  }

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.s3.accessKeyId = process.env.AWS_ACCESS_KEY_ID;
    ENV.s3.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
    ENV.s3.bucket = process.env.S3_BUCKET;
    ENV['s3-index'].accessKeyId = process.env.AWS_ACCESS_KEY_ID;
    ENV['s3-index'].secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
    ENV['s3-index'].bucket = process.env.S3_BUCKET;
    ENV.cloudfront.accessKeyId = process.env.AWS_ACCESS_KEY_ID;
    ENV.cloudfront.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
    ENV.cloudfront.distribution = process.env.AWS_CLOUDFRONT_DISTRIBUTION_ID;
  }

  return ENV;
}
