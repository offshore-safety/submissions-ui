import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-titleholders',
  readonly: false,
  actions: {
    addTitleholder() {
      this.get('submission').otherTitleholders.pushObject({businessAddress: {}, postalAddress: {}});
    }
  }
});
