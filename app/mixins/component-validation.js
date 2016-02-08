import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Mixin.create({
  _performValidation() {
    const errors = this.get('validator').validate(this.get('submission'));
    const keys = _.keys(errors);
    this.set('errors', errors);
    this.set('hasErrors', keys.length > 0);
  },
  _validate: function() {
    this._performValidation();
  }.on('didInsertElement'),
});
