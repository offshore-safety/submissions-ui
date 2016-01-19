var VALID_DEPLOY_TARGETS = [ //update these to match what you call your deployment targets
  'development',
  'production'
];

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    s3: {
      filePattern: '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,html}',
      // prefix: 'submissions-ui',
      region: 'ap-southeast-2'
    }
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
  }

  return ENV;
}
