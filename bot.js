const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});
client.on('message', message => {
    if (message.content === 'OW') {
    	message.reply('寂寞我們來玩Overwatch');
  	}
});
client.on('message', message => {
    if (message.content === 'pubg') {
    	message.reply('寂寞我們來玩PUBG');
  	}
});
client.on('message', message => {
    if (message.content === 'Minecraft') {
    	message.reply('寂寞我們來玩Hypixel');
  	}
});
client.on('message', message => {
    if (message.content === 'R6') {
    	message.reply('寂寞我們來玩RAINBOW6:SIECE');
  	}
});
client.on('message', message => {
    if (message.content === 'XD') {
    	message.reply('HAHA');
  	}
});
client.on('message', message => {
    if (message.content === 'test') {
    	message.reply('我正在運作當中');
  	}
});

client.on('message', message => {
    if (message.content === '公主') {
    	message.reply('誰在召喚我');
  	}
});
client.on('message', message => {
    if (message.content === 'Lonely') {
    	message.reply('寂寞主人在叫你');
  	}
});
client.on('message', message => {
    if (message.content === 'LonelyYT') {
    	message.reply('https://www.youtube.com/channel/UCiL9eRN8QbWCOuw8HD_LOpA');
  	}
});
client.on('message', message => {
    if (message.content === 'BakedporkYT') {
    	message.reply('https://www.youtube.com/channel/UCLlcPDPQ4wo9WhUL2CR2RWw?view_as=subscriber');
  	}
});
client.on('message', message => {
    if (message.content === 'rubbies') {
    	message.reply('寂寞是殘障');
  	}
});
    
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
