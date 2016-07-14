import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var App;

module('Integration - Login Page', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should navigate to the Login page', function(assert) {
  visit('/').then(function() {
    click("a:contains('Login')").then(function() {
      assert.equal(find('.panel-title').text(), 'Sign In');
    });
  });
});