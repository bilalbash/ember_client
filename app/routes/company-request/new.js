import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },

  actions: {
    save() {
      const newCompanyRequest = this.get('store').createRecord('company_request', this.currentModel);

      newCompanyRequest.save().then(
        () => {
          this.flash.success('Your sign up request for your company has been made successfully. Our system administrator will review ' +
          'your application and will let you know by email about your company account activation. Please keep visiting your inbox :) ' +
          'Thank you for trusting our services.', 5000);
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
