<div align="center">

# TouchPortal Keysight Plugin

</div>

<div align="center">

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/marcus-universe/TouchPortal_KeysightPlugin/master?color=%238777F5&label=version&logo=https%3A%2F%2Fapi.iconify.design%2Ficon-park-solid%3Afile-conversion.svg&logoColor=%238777F5)
![GitHub forks](https://img.shields.io/github/forks/marcus-universe/TouchPortal_KeysightPlugin)
![GitHub Repo stars](https://img.shields.io/github/stars/marcus-universe/TouchPortal_KeysightPlugin?color=%23FFED01)
![GitHub](https://img.shields.io/github/license/marcus-universe/TouchPortal_KeysightPlugin)

</div>

## Description

This Plugin for [TouchPortal](https://www.touch-portal.com/) adding controls for the piano visualizer [Keysight](https://store.steampowered.com/app/1325730/Keysight/) with the power of websockets.

## How to use it?

1. Install the TouchPortal_Keysight_Plugin.tpp in TouchPortal and restart TouchPortal.
2. Install the Keysight_Icon_Pack.tpi
<div align="left">
<img src="./assets/importPlugin.png" alt="import Plugin" >
<img src="./assets/importIconPack.png" alt="import Icon Pack" >
</div>

---

3. Set in Keysight under System/Websockets/Inbound websocket the address to `http://localhost:3000` or to your port after `:` when you changed it. Event name is `command`.
4. Now set what messages you wanna listen to and what there need to change.
<div align="left">
<img src="./assets/keysightSettings.png" alt="Keysight Settings" >
</div>

---

5. Add to your TouchPortal Button a `Send to Keysight` Action and replace the String with you message.
<div align="left">
<img src="./assets/sendCommand.png" alt="TouchPortal Settings send command" >

</div>
6. Have fun jamming 😉

---

## How can you help with the code?

### 1. Fork this repository

### 2. Install the npm dependencies

`npm install`

### 3. After making changes test your code

`npm run build` creates a new touchportal_keysightplugin.tpp in the `Installer` folder.
`npm run runServer` starts a localhost server on Port `3000` and listens to messages with the name `command` to test it.
`npm run start` starts the index.js file for checking if the plugin is working.

### 4. Make a Pull request to submit your changes.

## For more infos look:

- [TouchPortal API Docs](https://www.touch-portal.com/api/)
- [Node JS SDK for TouchPortal](https://github.com/spdermn02/touchportal-node-api)
- [Websockets Docs from Keysight](https://steamcommunity.com/sharedfiles/filedetails/?id=2218116335)
