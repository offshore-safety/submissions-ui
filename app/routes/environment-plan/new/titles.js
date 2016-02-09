import Ember from 'ember';
import ResetScroll from '../../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll,{
  submissionStore: Ember.inject.service(),
  model() {
    let titleList = this.store.findRecord('title-list', 'gs7o5');
    // if (!titleList) {
    //   titleList = this.store.createRecord('title-list', {});
    //   titleList.save();
    // }
    return titleList;
  },
  actions: {
    willTransition() {
      this.get('currentModel').save();
      this.get('currentModel').get('titles').forEach(function(title) {
        title.save();
      });
    },
    addTitle() {
      const titleList = this.get('currentModel');
      const newTitle = this.store.createRecord('title', {
        titleList: titleList
      });
      newTitle.save();
      titleList.get('titles').pushObject(newTitle);
      titleList.save();
    }
  }
});
