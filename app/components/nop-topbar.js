import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-topbar',
  pageTitleList: Ember.inject.service(),
  submissionStatus: Ember.inject.service(),
  topbarTitle: Ember.computed('pageTitleList.tokens', function() {
    return this.get('pageTitleList').toString();
  }),
  showActions: Ember.computed('submissionStatus.currentRoute', function() {
    const nonActionRoutes = [
      'welcome',
      'environment-plan.new.confirmation',
      'environment-plan-revision.confirmation',
      'fa-declaration.upload.confirmation',
      'fa-declaration.upload.confirmation'
    ];
    return nonActionRoutes.indexOf(this.get('submissionStatus').get('currentRoute')) === -1;
  }),
  showSaveModal: false,
  showCancelModal: false,
  actions: {
    toggleSave() {
      this.toggleProperty('showSaveModal');
    },
    toggleCancel() {
      this.toggleProperty('showCancelModal');
    },
    cancelYes() {
      this.sendAction('submissionCancelled');
      this.toggleProperty('showCancelModal');
    }
  }
});
