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
        var mesg = '';
        for (var i = 0; i < error.errors.get('length') ; i++){
          mesg = mesg + " \n" + (i+1) + " " + error.errors[i]["detail"];
        }
        this.flash.failure('Please review the errors below:' + mesg, 5000);
      });
    },
    cancel() {
      this.transitionTo('company_requests');
    }
  }
});
