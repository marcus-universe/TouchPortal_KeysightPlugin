const TouchPortalAPI = require("touchportal-api");
const TPClient = new TouchPortalAPI.Client();
const pluginId = "keysight";
const express = require("express");
const app = express();
let server = require("http").createServer(app);

let Port = 3000;

let io = require("socket.io")(Port, server, { cors: { origin: "*" } });

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

TPClient.on("Settings", (data) => {
  const portNumber = parseInt(data[0].Port);

  if (portNumber !== NaN) {
    if (portNumber !== Port) {
      console.log(`Change Port from ${Port} to ${portNumber}`);
      Port = portNumber;
      restartWebSocketServer();
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
    io.emit("command", command);
  } else if (data.actionId == "restart_keysight_server") {
    restartWebSocketServer();
  }
});

TPClient.connect({ pluginId });
