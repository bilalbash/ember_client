import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: service('session'),

  model() {
    return {};
  },

  actions: {
    save() {
      const newUser = this.get('store').createRecord('user', this.currentModel);
      newUser.save().then(
        () => {
          this.flash.success('You\'ve successfully created an agent for your company!', 5000);
          this.transitionTo("/");
        },

        (error) => {
          var mesg = '<p>Please review the following:</p><ul style="padding-top:3px;">',
              errorDiv = Ember.$('#errorDiv');
          for (var i = 0; i < error.errors.get('length') ; i++){
            mesg = mesg + "<li>" + error.errors[i]["detail"] + "</li>";
          }
          if (errorDiv.hasClass('hidden')){
            errorDiv.removeClass('hidden');
          }
          errorDiv.html('').append(mesg + '</ul>');
        }
      );
    },

    cancel() {
      this.transitionTo("/");
    }
  }
});
