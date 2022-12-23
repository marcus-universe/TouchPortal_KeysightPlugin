const TouchPortalAPI = require('touchportal-api');
const TPClient = new TouchPortalAPI.Client();
const pluginId = 'keysight';
/*
// Object to hold actionId of held actions
let heldAction = {};


// Receive an Action Call from Touch Portal

TPClient.on("Action", (data,hold) => {
  //hold parameter can be undefined, true or false
  // undefined => was from "On Press" or "On Event"
  // true => was from "On Hold" down (being held) trigger
  // false => was from "On Hold" up (being let go) trigger

  //Track the action being held
  if( hold ) {
    heldAction[message.actionId] = true;
  }
  else if ( !hold ) {
    delete heldAction[message.actionId];
  }

  //An action was triggered, handle it here

    {
      "type":"action",
      "pluginId":"id of the plugin",
      "actionId":"id of the action",
      "data": [
        {
          "id":"data object id",
          "value":"user specified data object value",
        },
        {
          "id":"data object id",
          "value":"user specified data object value",
        }
      ]
    }


  //Example Hold action handler
  let adjustVol = parseInt(message.data[0].value,10);
  while( hold === undefined || heldAction[message.actionId] ) {

    //Do Action here that can be repeated

    //Will cause a 100ms wait
    await new Promise(r => setTimeout(r,100));
    
    // If we aren't holding(so just a keypress) or we no longer are being held, break this loop
    if( hold === undefined || !heldAction[message.actionId] ) { break; }
  }

  ...

  // Once your action is done, send a State Update back to Touch Portal
  TPClient.stateUpdate("<state id>", "value", data.InstanceId);

  // If you have multiple states to send back, you can do that in one call versus separate
  let states = [
    { id: "<state id1>", value: "value"},
    { id: "<state id2>", value: "value1"}
  ];
  TPClient.stateUpdateMany(states);
});

TPClient.on("ListChange",(data) => {
    // An Action's List dropdown changed, handle it here
        {
            "type":"listChange",
            "pluginId":"id of the plugin",
            "actionId":"id of the action",
            "listId":"id of the list being used in the inline action",
            "instanceId":"id of the instance",
            "value":"newValue",
        }
   
});
*/