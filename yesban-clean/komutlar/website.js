const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor("#11a9ec")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Eğlence Komutları Özel Mesajlarda Kullanılamaz!')//burasıda dm den birisi kodu yazarsa bu uyarı vermesi için
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()  
    .setAuthor(`SamaSide WebSite`)//buraya istediğin yazı
    .setColor("#11a9ec")
    .setTimestamp()
    .setDescription('[Buraya Tıklayın](http://www.samaside.cf/#)')//burayada istediğin yazı
        .setImage(`https://cdn.discordapp.com/attachments/803550149434933269/829725348001611827/Per_8_04_2021_17_30_363.png`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [`website`],
  permLevel: 0
};

exports.help = {
  name: 'website',//
  description: 'website',
  usage: 'website'
};



