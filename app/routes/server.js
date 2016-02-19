import Ember from 'ember';
import io from 'npm:socket.io-client';
import ENV from 'selby-logs/config/environment';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  setupController(controller) {
    controller.set('stats', {});
    var socket = io('ws://' + ENV.apiUrl);

    console.log('opened socket connection');

    socket.on('server', function(stats) {
      console.log('Got a new Todo!', stats);
      controller.set('stats', stats);
    });

    controller.set('socket', socket);

  },
});
