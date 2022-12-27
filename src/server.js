const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(3000);

io.on('connection', (socket) => {
  console.log('Client connected');

  // Listen for incoming commands
  socket.on('command', (command) => {
    console.log(`Received command: ${command}`);

    // Do something with the command here, such as sending it to a device or processing it in some way
  });
});