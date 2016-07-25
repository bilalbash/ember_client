import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteComment(comment) {
      comment.deleteRecord();
      comment.save();
    }
  }
});
