import Ember from 'ember';
import Constants from '../constants';

export default Ember.Service.extend({
  activityRatings: Constants.ACTIVITY_RATINGS,
  complianceRatings: Constants.COMPLIANCE_RATINGS,
  unitValue: Constants.LEVY_UNIT_VALUE,
  _expectedDurationInYears(linkedActivityType) {
    switch(linkedActivityType.durationUnits) {
      case 'years':
        return linkedActivityType.expectedDuration;
      case 'months':
        return Math.floor(linkedActivityType.expectedDuration / 12 + 1);
      case 'days':
        return Math.floor(linkedActivityType.expectedDuration / 365 + 1);
    }
  },
  activityAmountFor(linkedActivityType) {
    return this.get('activityRatings')[linkedActivityType.type] * this.get('unitValue');
  },
  complianceAmountFor(linkedActivityType) {
    return this.get('complianceRatings')[linkedActivityType.type] * this.get('unitValue') * this._expectedDurationInYears(linkedActivityType);
  },
  calculateLeviesFor(linkedActivityType) {
    const activityAmount = this.activityAmountFor(linkedActivityType);
    const complianceAmount = this.complianceAmountFor(linkedActivityType);
    return {
      activity: activityAmount,
      compliance: complianceAmount,
      total: activityAmount + complianceAmount
    };
  }
});
