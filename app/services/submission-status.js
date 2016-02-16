import Ember from 'ember';

export default Ember.Service.extend({
  visiting(routeName) {
    console.log(`Visiting '${routeName}'`);
    this.set('currentRoute', routeName);
  },
  leaving(name, hasErrors) {
    this.set(name, hasErrors);
  },
  visited(name) {
    const value = this.get(name);
    return Ember.isPresent(value);
  },
  hasErrors(name) {
    const hasErrors = this.get(name);
    return Ember.isPresent(hasErrors) && hasErrors;
  }
});
 
