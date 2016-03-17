import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-topbar',
  pageTitleList: Ember.inject.service(),
  submissionStatus: Ember.inject.service(),
  topbarTitle: Ember.computed('pageTitleList.tokens', function() {
    return this.get('pageTitleList').toString();
  }),
  showActions: Ember.computed('submissionStatus.currentRoute', function() {
    return this.get('submissionStatus').get('currentRoute') !== 'welcome';
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
