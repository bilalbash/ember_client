import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('ticket');
  },

  actions: {
    delete(ticket) {
      ticket.deleteRecord();
      ticket.save();
    },

    details(ticket) {
      Ember.$.ajax({
        method: "GET",
        url: ENV.APP.API_PATH + "comments",
        dataType: "json",
        headers: {
          'Authorization': Ember.$('#userInfo').data('token')
        },
        data: { ticket_id: ticket.id }

      }).done(function(msg) {
        var result = '';
        // TODO: complete the feature when no comment recieves
        // console.log( Object.keys(msg).length);
        // console.log(msg.length);
        Ember.$.each(msg, function(key, value){
          var d = new Date(value.created_at);
          result = result + '<div class="panel panel-primary"><div class="panel-body"><strong class="text-primary">' + value.name + '</strong>: ' + value.description + '<em class="pull-right text-muted">' + d.toDateString() + '</em></div></div>';
        });
        Ember.$('.comments' + ticket.id).html('').html(result);

      }).fail(function() {
        // (jqXHR , textStatus) should be accessible via parameters
      });
    }
  }
});
