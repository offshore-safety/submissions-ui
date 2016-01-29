import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-activity-description',
  regulationTypes: [
    {label: 'Petroleum', value: 'petroleum', name: 'regulation-type-1'},
    {label: 'Greenhouse Gas', value: 'greenhouse_gas', name: 'regulation-type-2'}
  ],
  trueOrFalse: [
    {label: 'Yes', value: true},
    {label: 'No', value: false}
  ],
  disabled: false,
  showReferenceNumber: Ember.computed.or('submission.hasOPP', 'submission.hasEnvironmentMinisterDecision'),
  showReferenceNumberChanged: function() {
    if(!this.get('showReferenceNumber')) {
      Ember.set(this.get('submission'), 'OPPOrEPBCReferenceNumber', null);
    }
  }.observes('showReferenceNumber').on('init'),
  hasOffshoreProjectChanged: Ember.observer('submission.hasOffshoreProject', function() {
    const submission = this.get('submission');
    if (!submission.hasOffshoreProject) {
        Ember.set(submission, 'hasOPP', null);
        Ember.set(submission, 'hasEnvironmentMinisterDecision', null);
    }
  }),
});
