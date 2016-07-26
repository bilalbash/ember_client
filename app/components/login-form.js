import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),

  actions: {
    authenticate: function() {
      let { identification, password } = this.getProperties('identification', 'password');
      return this.get('session').authenticate('authenticator:devise', identification, password).then(
        () => {
          window.location.href = '/dashboard';
          this.flash.success('Successfully logged in!', 5000);
        }).catch((reason) => {
          this.set('errorMessage', reason.error);
        }
      );
    }
  }
});
