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
      newComment.save().then(
        () => {
          this.flash.success('You\'ve successfully created a comment.', 5000);
          this.transitionTo('tickets');
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
      this.transitionTo('tickets');
    }
  }
});
