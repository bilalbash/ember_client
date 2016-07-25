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
      const newTicket = this.get('store').createRecord('ticket', this.currentModel);
      newTicket.save().then(
        () => {
          this.flash.success('Successfully created ticket!', 5000);
          this.transitionTo('tickets');
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
      this.transitionTo('posts');
    }
  }
});
