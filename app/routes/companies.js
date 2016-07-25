import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  model() {
    return this.get('store').findAll('company');
  },

  actions: {
    delete(company) {
      company.deleteRecord();
      company.save();
    }
  }
});
