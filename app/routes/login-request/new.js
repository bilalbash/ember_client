import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },

  actions: {
    save() {
      const newLoginRequest = this.get('store').createRecord('login_request', this.currentModel);

      newLoginRequest.save().then(
        () => {
          this.flash.success('Your request for the sign up has been made successfully. Our administrator ' +
          'will let you know by email for your account activation. Keep visiting your inbox :) Thank you ' +
          'for trusting our services', 5000);
          this.transitionTo('/');

        }, (error) => {
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
      this.transitionTo('company_requests');
    }
  }
});
