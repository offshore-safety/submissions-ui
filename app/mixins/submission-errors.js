import Ember from 'ember';

export default Ember.Mixin.create({
  _onFailure: function(result) {
    switch(result.status) {
      case 400:
        this.set('modalTitle', 'There was an error with your submission');
        this.set('modalMessage', 'Please check the details of your submission are correct and try again.');
        break;
      case 404:
        this.set('modalTitle', 'Connection error');
        this.set('modalMessage', 'It looks like there are some connection issues. Please check your connection and try again.');
        break;
      case 500:
      case 502:
        this.set('modalTitle', 'Sorry, we had a problem');
        this.set('modalMessage', 'We are sorry for the inconvenience and will have the project sorted as soon as possible. Please try again soon.');
        break;
      }

      this.toggleProperty('showErrorModal');
  },
  showErrorModal: false,
  actions: {
    toggleErrorModal() {
      this.toggleProperty('showErrorModal');
    }
  }
});
