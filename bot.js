const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
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
    if (message.content === '666') {
    	message.reply('好牛B');
  	}
});
});
client.on('message', message => {
    if (message.content === 'rules') {
    	message.reply('不要給我說髒話');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
