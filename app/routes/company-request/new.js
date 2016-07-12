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
      	this.flash.success('Please review the errors below', 5000);
      	console.log(error);
      });
    },
    cancel() {
      this.transitionTo('company_requests');
    }
  }
});
