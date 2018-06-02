const Discord = require('discord.js');
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  let helpEmbed = new Discord.RichEmbed()
  .setTitle("List of Commands")
  .setColor(botconfig.blue)
  .setDescription("Here is a list of all the commands available right now:")
  .addField("help", "Gives you a list of commands");
  
  message.delete().catch(O_o => {}); 
  message.channel.send(helpEmbed); 
}

module.exports.help = {
  name: "help"
}
