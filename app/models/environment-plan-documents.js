import DS from 'ember-data';
import Ember from 'ember';
import Errors from '../mixins/errors';

export default DS.Model.extend(Errors, {
  environmentPlan: DS.belongsTo('document', {async: false}),
  attachments: DS.hasMany('document', {async: false}),
  reg31Documents: DS.attr(),
  errors: Ember.computed('environmentPlan.errors', 'attachments.@each.errors', 'reg31Documents', function() {
    const errors = {};

    errors.environmentPlan = this.get('environmentPlan').get('errors');

    errors.attachments = this.get('attachments').map((attachment) => attachment.get('errors'));

    return errors;
  })
});
