import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  admin_name: attr('string'),
  email: attr('string'),
  name: attr('string')
});
