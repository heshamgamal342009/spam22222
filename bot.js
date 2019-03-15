const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("555303139356573699")
setInterval(function() {
channel.send(`1234aaadddsss aaa aaa aaa aa`);
}, 30)
})

client.login(process.env.BOT_TOKEN);