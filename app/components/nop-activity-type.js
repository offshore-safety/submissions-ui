import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-activity-type',
  actions: {
    remove() {
      this.sendAction('removeActivityType', this.get('activityType'));
    }
  }
});
