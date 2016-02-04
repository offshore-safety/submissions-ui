import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Mixin.create({
  _validate: function() {
    const errors = this.get('validator').validate(this.get('submission'));
    const keys = _.keys(errors);
    this.set('errors', errors);
    this.set('hasErrors', keys.length > 0);
  }.on('init'),
});
