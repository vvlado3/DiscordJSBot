  const Discord = require('discord.js');
const got = require('got');
const { version } = require('discord.js');
const moment = require('moment');
const client = new Discord.Client();
const Enmap = require("enmap");
const fs = require("fs");
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);



const config = require("./config.json");

client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

const token = 'token';

client.on('ready', () =>{
    console.log('BOT is online')
    client.user.setPresence({ game: { name: `!help`, type: "WATCHING"}});
});


client.on('guildCreate', guild => {
	  let channel = client.channels.get("id");
  
    const embed = new Discord.RichEmbed()
    .setColor("#cde246")
    .setAuthor(`New Server Joined ${guild.name}`)
    .setThumbnail(guild.iconURL)
    .addField("Owner", guild.owner.user.tag)
    .addField("SERVER ID", guild.id, true)
    .addField("Users", guild.memberCount, true)
    .addField("Channels", guild.channels.size, true)
    channel.send(embed);
	});

client.login(token);
        