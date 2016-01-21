import Ember from 'ember';
import ResetScroll from '../../../mixins/reset-scroll';
import $ from 'jquery';

export default Ember.Route.extend(ResetScroll, {
  submissionStore: Ember.inject.service(),
  _copyContacts: function(model) {
    if (model) {
      if (model.sameAsActivity) {
        model.activityContact = $.extend(true, {}, model.submissionContact);
      }
      if (model.sameAsLiaison) {
        model.liaisonContact = $.extend(true, {}, model.submissionContact);
      }
    }
  },
  model() {
    return this.get('submissionStore').retrieve();
  },
  afterModel(model) {
    if (!model.submissionContact) {
      model.submissionContact = {
        postalAddress: {}
      };
    }
  },
  actions: {
    willTransition() {
      const model = this.get('currentModel');
      this._copyContacts(model);
      this.get('submissionStore').save(model);
    }
  }
});
