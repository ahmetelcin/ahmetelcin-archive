const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.MessageEmbed()
.setDescription('Doğru Kullanım: s!tavsiye Bence bunu bunu eklerseniz daha iyi olur'));
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('Tavsiyeniz başarıyla bildirildi! İyi GÜNLER')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının tavsiyesi:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Tavsiye", type)
.setThumbnail(message.author.avatarURL)
client.channels.cache.get('786306455229694002').send(embed2); // Kanal ID 

};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'tavsiye',
  description: 'Bot için tavsiye bildirirsiniz',
  usage: 'tavsiye <tavsiyeniz>'
};