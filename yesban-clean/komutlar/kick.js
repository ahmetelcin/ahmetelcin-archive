const db = require("quick.db");
const ayarlar = require("../ayarlar.json")
const Discord = require('discord.js');
exports.run = (client, message, args) => {
      const prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix;
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kick` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let members = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    let hata3 = new Discord.MessageEmbed()
    .setTitle("Bir Hata oluştu :(")
    .setDescription(message.member.user.username +` \n\n **${prefix}kick <kullanıcı>** şeklinde olmalı!`)
    .setColor("RANDOM");
  
if (!members) return message.channel.send(hata3);

      let hata2 = new Discord.MessageEmbed()
    .setTitle("Bir Hata oluştu :(")
    .setDescription(message.member.user.username +` \n\n Yetkilileri sunucudan atamam`)
    .setColor("RANDOM");
  
  if (!message.guild.member(user).kickable) return message.reply(hata2);
  message.guild.member(user).kick();

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
};
