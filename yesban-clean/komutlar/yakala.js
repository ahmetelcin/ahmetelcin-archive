const Discord = require('discord.js')

exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  if(!user) return message.channel.send('kimi yakalıcan seni gidi xD')
  if (user.id === message.author.id) return message.reply('kendini niye yakalıyon değuşuk :D');

  if (message.channel.type !== 'dm') {
      var gif = [
      'https://media1.tenor.com/images/1b84ce770b60bbffcbf4f658199ce2e8/tenor.gif?itemid=18715932'];

      var gifler = gif[Math.floor(Math.random() * gif.length)];
  }

  if (message.channel.type !== 'dm') {
    const op = new Discord.MessageEmbed()
        .setAuthor('YAKALANDIN DOSTUM!!!')
    .setDescription(`<@${message.author.id}> kullanıcısı  <@${user.id}> kullanıcısını bişeler izlerken yakaladı`)
    .setColor('RANDOM')
    .setImage(gifler)
    return message.channel.send(op)
    }

};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['yakala'],
  permLevel: 0
};

exports.help = {
  name: 'yakala',
  description: 'yakala',
  usage: 'yakala'
};