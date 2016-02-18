import Ember from 'ember';

export default Ember.Service.extend({
  visiting(routeName) {
    console.log(`Visiting '${routeName}'`);
    this.set('currentRoute', routeName);
  }
});
 
