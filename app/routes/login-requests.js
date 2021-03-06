import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.get('store').findAll('login_request');
  },

  actions: {
    delete(login_request) {
      login_request.deleteRecord();
      login_request.save();
    }
  }
});
