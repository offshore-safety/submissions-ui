import Ember from 'ember';

export default Ember.Service.extend({
  uploadFile(file) {
    return Ember.$.ajax('http://nopsema-api.dev/api/v1/submissions/files',
      {
        method: 'post',
        data: {file: file}
      }
    );
  }
});
