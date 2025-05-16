const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor(`Fayt`)//1. yazı
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription('Dövüşcümüsün Be!')//2. yazı
        .setImage(`https://media.giphy.com/media/f9qqV2Dp84wmIaFjxn/giphy.gif`)//gif linki
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [`fayt`,`dövüş`],
  permLevel: 0
};

exports.help = {
  name: 'dövüş',
  description: 'dövüş',
  usage: 'dövüş'
};