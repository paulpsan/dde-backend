'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 */

module.exports = cb => {
  var io = require('socket.io')(strapi.server);
  var uuidv4 = require('uuid/v4');
  var users = [];

  io.on('connection', socket => {
    socket.user_id = uuidv4();
    users.push(socket);

    // send message on user connection
    socket.emit('hello', JSON.stringify({
      message: 'Hello food lover!'
    }));

    socket.on('disconnect', () => {
      console.log(`User ${socket.user_id} disconnected`);
      users.forEach((user, i) => {
        if (user.user_id === socket.user_id) users.splice(i, 1);
      });
    });
  })

  strapi.io = io; // register socket io inside strapi main object to use it globally anywhere
  strapi.emitToAllUsers = food => io.emit('food_ready', food);

  cb();
};
