const Client = require('socket.io-client');
const TouchPortalAPI = require('touchportal-api');
const TPClient = new TouchPortalAPI.Client();
const pluginId = 'keysight';

// Connect to the SocketIO server
var socket = Client('ws://localhost:3000');

// TPClient.on("Settings", (data) => {
//   console.log(data[0] + " setting set");

//     socket = Client(toString(data[0].value) + ":" + toString(data[1].value));
// });

TPClient.on("Action", (data) => {
  if (data.actionId == "send_keysight_command") {
    let command = data.data[0].value;
    console.log(data + " was sent to Keysight");

    // Send the command to the SocketIO server
    socket.emit('command', command);
  }
});




TPClient.connect({ pluginId });