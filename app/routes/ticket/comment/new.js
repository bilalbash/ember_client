import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },

  renderTemplate() {
    this.render('ticket.comment.new', { into: 'application' });
  },

  actions: {
    save() {
      const ticket = this.modelFor('ticket');
      const newComment = this.get('store').createRecord('comment', this.currentModel);
      newComment.set('ticket', ticket);
      newComment.save().then(() => {
        this.transitionTo('tickets');
      });
    },

    cancel() {
      this.transitionTo('tickets');
    }
  }
});
