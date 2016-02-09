import Ember from 'ember';

export default Ember.Service.extend({
  leaving(name, errors) {
    this.set(name, errors);
  },
  isComplete(name) {
    const value = this.get(name);
    return Ember.isArray(this.get(name));
  },
  hasErrors(name) {
    const errors = this.get(name);
    return Ember.isArray(errors) && !Ember.isEmpty(errors);
  }
});
 
