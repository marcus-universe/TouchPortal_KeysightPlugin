const TouchPortalAPI = require("touchportal-api");
const TPClient = new TouchPortalAPI.Client();
const pluginId = "keysight";
const express = require("express");
const app = express();

// Create a new HTTP server
let server = require("http").createServer(app);

// Current Port
let Port = 3000;
let commandName = "command";

// Create a new Socket.IO instance
let io = require("socket.io")(Port, server, { cors: { origin: "*" } });

//#####################
//Functions
//#####################

//Restart Websocket Server
function restartWebSocketServer() {
  // Close the existing server
  try {
    server.close(() => {
      console.log("WebSocket server closed");

      // Create a new server
      try {
        server = require("http").createServer(app);
      } catch (error) {
        console.log(error);
      }
      // Create a new Socket.IO instance
      try {
        io = require("socket.io")(Port, server, { cors: { origin: "*" } });
        console.log("WebSocket server restarted");
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

//Change Port
function changePort(newPort) {
  Port = newPort;
  console.log(`Port changed to ${Port}`);
  restartWebSocketServer();
}
//Change Command Name
function changeCommandName(newCommandName) {
  commandName = newCommandName;
  console.log(`Command Name changed to ${commandName}`);
}

//#####################
//Settings
//#####################
TPClient.on("Settings", (data) => {
  const portNumber = parseInt(data[0].Port);
  const command = data[0].Command_Name;
  if (command !== commandName) {
    changeCommandName(command);
  }

  if (portNumber !== NaN) {
    if (portNumber !== Port) {
      console.log(`Change Port from ${Port} to ${portNumber}`);
      changePort(portNumber);
    }
  } else {
    console.log("Port Number is not a number");
  }
});

//#####################
//Actions
//#####################
TPClient.on("Action", (data) => {
  if (data.actionId == "send_keysight_command") {
    let command = data.data[0].value;
    console.log(command + " was sent to Keysight");
    io.emit(commandName, command);
  } else if (data.actionId == "restart_keysight_server") {
    restartWebSocketServer();
  }
});

//#####################
//Receive Messages from Keysight
//#####################
io.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log("Received message:", message);
  });
});

TPClient.connect({ pluginId });
