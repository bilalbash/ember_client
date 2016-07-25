import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
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
