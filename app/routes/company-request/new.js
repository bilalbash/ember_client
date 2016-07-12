import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },
  actions: {
    save() {
      const newCompanyRequest = this.get('store').createRecord('company_request', this.currentModel);
      newCompanyRequest.save().then(() => {
        this.transitionTo('/');
      });
    },
    cancel() {
      this.transitionTo('company_requests');
    }
  }
});
