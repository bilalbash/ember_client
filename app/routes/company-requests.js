import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('company_request');
  },
  actions: {
    delete(company_request) {
      company_request.deleteRecord();
      company_request.save();
    }
  }
});
