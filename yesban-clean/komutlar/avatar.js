const Discord = require('discord.js');


exports.run = function(client, message) {

   let kullanici = message.mentions.users.first();
  
      const embed2 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag) 
        .setImage(message.author.avatarURL())
        .setColor("RANDOM")
    if (!kullanici) return message.channel.send(embed2);
  
  
    const embed = new Discord.MessageEmbed()
        .setAuthor(kullanici.tag) 
        .setImage(kullanici.avatarURL())
        .setColor("RANDOM")
    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['avatar'],
  permLevel: 0 
};

exports.help = {
  name: 'avatar', 
  description: 'Avatarınızı gösterir',
  usage: 'avatar'
};