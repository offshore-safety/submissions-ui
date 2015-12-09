import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTitleholder() {
      this.get('model').otherTitleholders.pushObject({});
    }
  }
});
