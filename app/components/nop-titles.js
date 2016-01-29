import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-titles',
  disabled: false,
  actions: {
    addTitle() {
      this.get('submission').titles.pushObject({});
    }
  }
});
