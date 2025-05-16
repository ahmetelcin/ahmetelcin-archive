const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
  .setTitle("OY VER")
  .setColor("RANDOM")
  .setDescription("**OY VER=**" + ` [OY VER](https://top.gg/bot/757307420082176050/vote)`)
  .setFooter('*---------------------------*')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vote','oyver'],
  permLevel: 0
};

exports.help = {
  name: 'vote',
  description: 'vote',
  usage: 'vote'
};  