import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  admin_name: attr('string'),
  email: attr('string'),
  name: attr('string')
});
