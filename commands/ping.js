const Discord = require('discord.js');
const botconfig = require('./botconfig.json');

module.exports.run = async (bot, message, args) => {
  let pingEmbed = new Discord.RichEmbed()
  .setTitle("Ping Command")
  .setDescription("Pong!")
}

module.exports.help = {
  name: "ping"
}
