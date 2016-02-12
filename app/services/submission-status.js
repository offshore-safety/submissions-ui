import Ember from 'ember';

export default Ember.Service.extend({
  leaving(name, hasErrors) {
    console.log(`Leaving '${name}'`);
    this.set(name, hasErrors);
  },
  visited(name) {
    console.log(`Visited '${name}'`)
    const value = this.get(name);
    return Ember.isPresent(value);
  },
  hasErrors(name) {
    console.log(`Checking errors on '${name}'`)
    const hasErrors = this.get(name);
    return Ember.isPresent(hasErrors) && hasErrors;
  }
});
 
