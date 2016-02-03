import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-titles',
  readonly: false,
  actions: {
    addTitle() {
      this.get('submission').titles.pushObject({});
    }
  }
});
