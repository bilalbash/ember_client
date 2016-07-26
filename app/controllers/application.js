import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  currentUser: Ember.computed('session.data', function() {
      return this.get('session.data.authenticated');
  }),

  actions: {
    logout() {
      this.flash.success('Successfully logged out!', 5000);
      this.get('session').invalidate();
    }
  }
});
