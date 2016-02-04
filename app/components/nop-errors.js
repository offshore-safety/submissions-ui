import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({
  tagName: 'nop-errors',
  _initErrorMessages: function() {
    const errors = this.get('errors');
    const keys = _.keys(errors);
    this.set('errorMessages', keys.map((k) => `${errors[k]}`));
  }.on('init')
});
