import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var App;

module('Integration - Home Page', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('Should display langing page or home page', function(assert) {
  visit('/').then(function() {
    assert.equal(find('h2#title').text(), 'Home');
  });
});

test('Should allow navigating back to home from login page', function(assert) {
  visit('/login').then(function() {
    click('a:contains("Home")').then(function() {
      assert.notEqual(find('h2').text(), 'About');
    });
  });
});