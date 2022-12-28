// const Client = require('socket.io-client');
const TouchPortalAPI = require('touchportal-api');
const TPClient = new TouchPortalAPI.Client();
const pluginId = 'keysight';
const express = require('express');
const app = express();
const server = require('http').createServer(app);

const Port = 3000;

// TPClient.on("Settings", (data) => {
  // const portNumber = JSON.parse(data[0]);

  // console.log(portNumber);
// });

const io = require('socket.io')(Port, server, {cors: {origin: '*'}});

// const socket = io('ws://localhost:3000');

// socket.on('connect', () => { console.log('Client connected'); });

  TPClient.on("Action", (data) => {
    if (data.actionId == "send_keysight_command") {
      let command = data.data[0].value;
      console.log(command + " was sent to Keysight");

      // Send the command to the SocketIO server
      io.emit('command', command);
    }
  });

  


TPClient.connect({ pluginId });