const prefix = "ps!";
const discord = require ('discord.js');

var client = new discord.Client(); 

const token = "NDQ4OTk1Mjk4OTUwNTEyNjQx.DeeSHA.iLmGnxfnKx1fTfm-SEt6QZuJJ_Q";

client.on('ready', () => {
    console.log('I am ready mate!');
    
});

client.on('message', message => {
    
    if (sender.id === '449013570806480896') {
        return;
    }
    
    if (message.author.bot) return;
    
    msg = message.content.toLowerCase();
    
    if (msg.startsWith (prefix + 'ping')) {
        message.channel.send('Pong! ' + client.ping + "ms");
    }
    
    if (msg.startsWith (prefix + 'fortune')) {
        fortuneMessage = message.content.slice (9);
        number = 2;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1; 
        switch (random) {
            case 1: message.channel.send('The fortune teller has found out your answer is **yes!**!'); break;
            case 2: message.channel.send('The fortune teller has found out your answer is **no**!'); break;
        }
    }
    
    if (msg.startsWith (prefix + 'help')) {
        message.author.send('**List of Commands** \n \n**ps!help** - Gives you a List of Commands \n**ps!ping** - Pong! \n**ps!fortune [question]** - Find out the answer to your questions! (BETA) \n**ps!links** - Gives All of the PSG Social Media Links!');
        
    }
    
    if (msg.startsWith (prefix + 'links')) {
        message.channel.send('**Links** \n \n***YouTube*** - https://www.youtube.com/channel/UC-KM4Su6AEkUNea4TnYbBBg \n***Twitter*** - https://twitter.com/psgrenade \n***Facebook*** - https://www.facebook.com/PlayStationGrenade/');
    }
    
    if (msg.includes('fuck')) {
        message.delete();
        message.channel.send('Hey! Don\'t be a potty-mouth' + member.toString());
    }
    
});

// THIS  MUST  BE  THIS  WAY
client.login (token);
