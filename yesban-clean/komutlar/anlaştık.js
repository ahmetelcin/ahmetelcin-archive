const Discord = require('discord.js')

exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  if(!user) return message.channel.send('Kiminle anlaştın')
  if (user.id === message.author.id) return message.reply('Kendinle anlaşmak :D');

  if (message.channel.type !== 'dm') {
      var gif = [
      'https://media1.tenor.com/images/f4eaa389faa4e7ed2a4e5d4e53d076a8/tenor.gif?itemid=18553243'];

      var gifler = gif[Math.floor(Math.random() * gif.length)];
  }
    
  if (message.channel.type !== 'dm') {
    const op = new Discord.MessageEmbed()
    .setDescription(`<@${message.author.id}>` + ` kullanıcı ` + ` <@${user.id}> kullanıcısınla anlaştı `)
    .setColor('RANDOM')
    .setImage(gifler)
    return message.channel.send(op)
    }
  
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'anlaştık',
  description: 'anlaştık',
  usage: 'anlaştık'
};