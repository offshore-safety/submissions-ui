import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nop-topbar',
  pageTitleList: Ember.inject.service(),
  topbarTitle: Ember.computed('pageTitleList.tokens', function() {
    return this.get('pageTitleList').toString();
  })
});
