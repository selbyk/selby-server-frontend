/* globals io */
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import io from 'npm:socket.io-client';
//import feathers from 'npm:feathers-client/lib/client';
//import socketio from 'npm:feathers-socketio/client';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service('session'),

  setupController(controller) {
    controller.set('logs',[]);
    var socket = io('ws://selby.io:5644');

      console.log('opened socket connection');

      socket.on('log', function(log) {
        console.log('Got a new Todo!', log);
        controller.get('logs').unshiftObject(log);
      });

      socket.on('ping', function(ping) {
        console.log('ping', ping);
        //console.log('socket', socket);
        socket.io.emitAll('pong', ping);
      });


    controller.set('socket', socket);

  },
  model() {
    return [{
      "id": 1,
      "type": "info",
      "code": null,
      "message": "sdfsdfsdf",
      "time": "2016-02-17T13:36:58.806Z",
      "createdAt": "2016-02-17T13:36:58.874Z",
      "updatedAt": "2016-02-17T13:36:58.874Z"
    }, {
      "id": 2,
      "type": "info",
      "code": null,
      "message": "",
      "time": "2016-02-17T13:36:58.860Z",
      "createdAt": "2016-02-17T13:36:58.875Z",
      "updatedAt": "2016-02-17T13:36:58.875Z"
    }, {
      "id": 3,
      "type": "info",
      "code": null,
      "message": "sdfsdfsdf",
      "time": "2016-02-17T13:36:58.862Z",
      "createdAt": "2016-02-17T13:36:58.876Z",
      "updatedAt": "2016-02-17T13:36:58.876Z"
    }, {
      "id": 4,
      "type": "info",
      "code": null,
      "message": "sdfsdfsdf",
      "time": "2016-02-17T13:37:01.831Z",
      "createdAt": "2016-02-17T13:37:01.863Z",
      "updatedAt": "2016-02-17T13:37:01.863Z"
    }, {
      "id": 5,
      "type": "info",
      "code": null,
      "message": "",
      "time": "2016-02-17T13:37:01.857Z",
      "createdAt": "2016-02-17T13:37:01.864Z",
      "updatedAt": "2016-02-17T13:37:01.864Z"
    }, {
      "id": 6,
      "type": "info",
      "code": null,
      "message": "sdfsdfsdf",
      "time": "2016-02-17T13:37:01.859Z",
      "createdAt": "2016-02-17T13:37:01.866Z",
      "updatedAt": "2016-02-17T13:37:01.866Z"
    }];
  }
});
