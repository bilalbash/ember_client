import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('ticket');
  },

  actions: {
    delete(ticket) {
      ticket.deleteRecord();
      ticket.save();
    }
  }
});
