import Ember from 'ember';
import Serializable from '../mixins/serializable';

export default Ember.Object.extend(Serializable, {
  _serializableProperties: [
    'activity', 'compliance', 'total'
  ],
  activity: null,
  compliance: null,
  total: null
});
