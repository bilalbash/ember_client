import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  title: attr('string'),
  ticket_type: attr('string'),
  status: attr('string'),
  description: attr('string'),
  comments: DS.hasMany('comment')
});
