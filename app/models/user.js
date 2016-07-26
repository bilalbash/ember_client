import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  full_name: attr('string'),
  email: attr('string'),
  company_id: attr('string')
});
