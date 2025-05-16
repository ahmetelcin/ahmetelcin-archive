const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json")
exports.run = (client, message, args) => {
  
    const prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix;
  
  let user = message.mentions.users.first();

  let hata3 = new Discord.MessageEmbed()
    .setTitle("Bir Hata oluştu :(")
    .setDescription(message.member.user.username +` \n\n **${prefix}ban <kullanıcı>** şeklinde olmalı!`)
    .setColor("RANDOM");

  let hata4 = new Discord.MessageEmbed()
    .setTitle("Bir Hata oluştu :(")
    .setDescription(
      message.member.user.username + ", yetkilileri yasaklayamassın!"
    )
    .setColor("RANDOM")
    .setFooter("Ne kadar tuhaf dimi?");

  let hata2 = new Discord.MessageEmbed()
    .setTitle("Bir Hata oluştu :(")
    .setDescription(
      message.member.user.username +
        ' Sunucudan Birini yasaklamak için,**"ÜYELERİ ENGELLE"** Yetkisine,sahip olman gerekiyor.'
    )
    .setColor("RANDOM");

  ///////////////////////////////////////////////////ing

  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.sendEmbed(hata2);
let members = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

if (!members) return message.channel.send(hata3); 
  if (message.guild.member(user).hasPermission("ADMINISTRATOR"))
    return message.channel.send(hata4);

  message.channel.send(
    "**" +
      user +
      "**,**" +
      message.member.user.username +
      "** Tarafından Yasaklandı!"
  );
  message.guild.members.ban(user, { days: 7 });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ban",
  description: "ban atmak",
  usage: "ban"
};
