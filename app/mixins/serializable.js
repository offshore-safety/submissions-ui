import Ember from 'ember';

export default Ember.Mixin.create({
  serialize() {
    const serialized = {};

    this.get('_serializableProperties').forEach((key) => {
      const value = this.get(key);
      if (Ember.isArray(value)) {
        serialized[key] = value.map((element) => element.serialize());
      } else if (Ember.isPresent(value) && typeof value === 'object') {
        serialized[key] = value.serialize();
      } else {
        serialized[key] = value;
      }
    });

    return serialized;
  },
  deserialize(json) {
    Object.keys(json).forEach((key) => {
      const value = json[key];
      if (Ember.isArray(value)) {
        this.set(key, value.map((element) => this.get('_relationshipTypes')[key].create().deserialize(element)));
      } else if (Ember.isPresent(value) && typeof value === 'object') {
        this.set(key, this.get('_relationshipTypes')[key].create().deserialize(value));
      } else {
        this.set(key, value);
      }
    });

    return this;
  }
});
