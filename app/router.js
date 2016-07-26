import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('dashboard');

  this.route('company_requests');
  this.route('company_request.new', { path: 'company_requests/new' });
  this.resource('company_request', { path: 'company_requests/:company_request_id' });

  this.route('login_requests');
  this.route('login_request.new', { path: 'login_requests/new' });
  this.resource('login_request', { path: 'login_requests/:login_request_id' });

  this.route('tickets');
  this.route('ticket.new', { path: 'tickets/new' });
  this.route('ticket.assign', { path: 'tickets/assign' });
  this.resource('ticket', { path: 'tickets/:ticket_id' }, function() {
    this.route('comment.new', { path: 'comments/new' });
  });

  this.route('users');
  this.route('user.new', { path: 'users/new' });
  this.resource('user', { path: 'users/:user_id' });
});

export default Router;
