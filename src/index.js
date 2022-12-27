const socketIO = require('socket.io-client');
const TouchPortalAPI = require('touchportal-api');
const TPClient = new TouchPortalAPI.Client();
const pluginId = 'keysight';

// Connect to the SocketIO server
const socket = socketIO('http://localhost:3000');

TPClient.on("Settings",(data) => {

    socket = socketIO(data.data[0].value + ":" + data.data[1].value);
    TPClient.removeState("stateIdToRemove");
});

TPClient.on("Action", (data) => {
  if (data.actionId == "send_keysight_command") {
    let command = message.data.data[0].value;
    console.log(command + " was sent to Keysight");

    // Send the command to the SocketIO server
    socket.emit('command', command);
  }
});




TPClient.connect({ pluginId });