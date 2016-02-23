import Ember from 'ember';

export default Ember.Component.extend({
  document: null,
  canRemove: false,
  actions: {
    removeDocument(document) {
      this.sendAction('removeDocument', this.get('document'));
    }
  }
});
