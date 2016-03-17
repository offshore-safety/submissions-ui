import Ember from 'ember';

export default Ember.Component.extend({
  showOk: true,
  actions: {
    toggleModal: function() {
      this.sendAction('close');
    }
  }
});
