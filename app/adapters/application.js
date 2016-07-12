// import DS from 'ember-data';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import ActiveModelAdapter from 'active-model-adapter';

import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:devise'
});

export default ActiveModelAdapter.extend({
  host: 'http://localhost:3000'
});
