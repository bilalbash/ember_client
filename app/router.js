import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('login');
  this.route('dashboard');

  this.route('companies');
  this.route('company.new', { path: 'companies/new' });
  this.resource('company', { path: 'companies/:company_id' });

  this.route('company_requests');
  this.route('company_request.new', { path: 'company_requests/new' });
  this.resource('company_request', { path: 'company_requests/:company_request_id' });

});

export default Router;
