const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("590852844907790337")
setInterval(function() {
channel.send(` im king  Discord`);
}, 30)
})

client.login(process.env.BOT_TOKEN);