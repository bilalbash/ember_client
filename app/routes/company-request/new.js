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
      });
    },
    cancel() {
      this.transitionTo('company_requests');
    }
  }
});
