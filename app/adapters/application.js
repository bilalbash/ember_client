import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import ActiveModelAdapter from 'active-model-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:devise'
});

export default ActiveModelAdapter.extend({
  session: Ember.inject.service('session'),

  host: 'http://localhost:3000',

  headers: Ember.computed('session.data', function() {
    return {
      'Authorization': this.get('session.data.authenticated.token')
    };
  })
});
