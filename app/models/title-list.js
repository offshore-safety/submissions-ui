import Ember from 'ember';
import Errors from '../mixins/errors';
import Title from './title';
import Serializable from '../mixins/serializable';

export default Ember.Object.extend(Errors, Serializable, {
  _serializableProperties: [
    'titles'
  ],
  _relationshipTypes: {
    'titles': Title
  },
  titles: [],
  errors: Ember.computed('titles.@each.errors', function() {
    return {titles: this.get('titles').map((t) => t.get('errors'))};
  })
});
