import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },

  actions: {
    save() {
      const newCompanyRequest = this.get('store').createRecord('company_request', this.currentModel);

      newCompanyRequest.save().then(() => {
        this.flash.success('Successfully created company!', 5000);
        this.transitionTo('/');

      }, (error) => {
        var mesg = '',
            errorDiv = Ember.$('#errorDiv');
        for (var i = 0; i < error.errors.get('length') ; i++){
          mesg = mesg + "<p>" + error.errors[i]["detail"] + "</p>";
        }
        if (errorDiv.hasClass('hidden')){
          errorDiv.removeClass('hidden');
        }
        errorDiv.html('').append(mesg);
      });
    },

    cancel() {
      this.transitionTo('company_requests');
    }
  }
});
