<div align="center">

# TouchPortal Keysight Plugin

</div>

<div align="center">

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/marcus-universe/TouchPortal_KeysightPlugin/master?color=%238777F5&label=version&logo=https%3A%2F%2Fapi.iconify.design%2Ficon-park-solid%3Afile-conversion.svg&logoColor=%238777F5)
![GitHub forks](https://img.shields.io/github/forks/marcus-universe/TouchPortal_KeysightPlugin)
![GitHub Repo stars](https://img.shields.io/github/stars/marcus-universe/TouchPortal_KeysightPlugin?color=%23FFED01)
![GitHub all releases](https://img.shields.io/github/downloads/marcus-universe/TouchPortal_KeysightPlugin/total?color=%23792af7&style=flat-square)
![GitHub](https://img.shields.io/github/license/marcus-universe/TouchPortal_KeysightPlugin)

</div>

## Description

This Plugin for [TouchPortal](https://www.touch-portal.com/) adding controls for the piano visualizer [Keysight](https://store.steampowered.com/app/1325730/Keysight/) with the power of websockets and socketIO.

### [Download latest Version](https://github.com/marcus-universe/TouchPortal_KeysightPlugin/releases)

## How to use it?

1. Install the TouchPortal_Keysight_Plugin.tpp in TouchPortal and restart TouchPortal.
2. Install the Keysight_Icon_Pack.tpi
<div align="left">
<img src="assets/importPlugin.PNG" alt="import Plugin" >
<img src="assets/importIconPack.PNG" alt="import Icon Pack" >
</div>

---

3. Set in Keysight under System/Websockets/Inbound websocket the address to `http://localhost:3000` or to your port after `:` when you changed it. Event name is `command`.
4. Now set what messages you wanna listen to and what there need to change.
<div align="left">
<img src="assets/keysightSettings.PNG" alt="Keysight Settings" >

<br>
<br>

**Ports can be changed here**

![image](https://user-images.githubusercontent.com/26997041/210268422-5b92e5be-daf8-4382-9e92-b7591ac965e0.png)

</div>

---

5. Add to your TouchPortal Button a `Send to Keysight` Action and replace the String with you message.
<div align="left">

For sending a message to Keysight

![image](https://user-images.githubusercontent.com/26997041/210267856-4970f667-8173-414c-a75e-c3c5988ebebb.png)

For restarting the Websocket Server

![image](https://user-images.githubusercontent.com/26997041/210268184-954089ac-1f03-4182-a9f8-25c3626e40a5.png)

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

## Special thanks to:

Keysight Discord Server Members
and
HeapUnderflow for providing a [Keysight SocketIO Template](https://gitlab.com/HeapUnderflow/keysight-socket.io-template)
