const TouchPortalAPI = require('touchportal-api');
const TPClient = new TouchPortalAPI.Client();
const pluginId = 'keysight';


TPClient.on("Action", (data) => {

  if (data.actionId == "send_keysight_command") {
    let command = String(data.data[0].value);
    console.log(command + " was sent to Keysight");
  }
});

TPClient.connect({ pluginId });