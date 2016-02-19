import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('/', function() {});
  this.route('login');
  this.route('server');
});

export default Router;
