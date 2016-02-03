import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-titleholders',
  disabled: false,
  actions: {
    addTitleholder() {
      this.get('submission').otherTitleholders.pushObject({businessAddress: {}, postalAddress: {}});
    }
  }
});
