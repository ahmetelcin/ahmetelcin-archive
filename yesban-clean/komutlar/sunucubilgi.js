   const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message, params) => {
  
  var afkkanalı = message.guild.afkChannel
  if(afkkanalı === null) afkkanalı = "Yok"

  var onay = message.guild.verified
    if(onay === false) onay = "Yok"
    if(onay === true) onay = "Var"

   const embed = new Discord.MessageEmbed() 
   .setColor("RANDOM")
   .setAuthor(message.guild.name, message.guild.userURL)
   .setThumbnail(message.guild.iconURL)
   .addField("Sunucu Bilgileri", `**İsim kısaltması**  ${message.guild.nameAcronym} \n**Sunucu sahibi** <@${message.guild.ownerID}> \n**Sunucu kimliği** ${message.guild.id} \n**Sunucu bölgesi** ${message.guild.region} \n**Doğrulama seviyesi** ${message.guild.verificationLevel} \n**Boost** ${message.guild.premiumSubscriptionCount} \n**Boost kademesi** ${message.guild.premiumTier} \n**Shard Pingi** ${message.guild.shard.ping} \n**Shard Durumu** ${message.guild.shard.status} \n**Onay** ${onay}`)
   .addField("Sunucu Özellikleri", `**Üyeler** ${message.guild.members.cache.filter( member => member.user.bot).size} bot | ${message.guild.memberCount} üye \n**Kanallar** ${message.guild.channels.cache.filter(chan => chan.type === 'voice').size} sesli / ${message.guild.channels.cache.filter(chan => chan.type === 'text').size} metin \n**Kanal sayısı** ${message.guild.channels.cache.size} \n**AFK kanalı** ${afkkanalı} \n**AFK zaman aşımı** ${message.guild.afkTimeout} \n**Güncelleme kanalı** ${message.guild.publicUpdatesChannel} \n**Kural Kanalı** ${message.guild.rulesChannel} \n**Oluşturma tarihi** ${message.guild.createdAt}`)
   .setFooter(`YesBan BOT`, message.guild.iconURL)
   .setTimestamp()
   message.channel.send({embed});
   message.react('✅')
 };

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ["sb","sunucubilgi"],
   permLevel: 2
 };

 exports.help = {
   name: 'sunucubilgi',
   description: 'Sunucu bilgisini söyler.',
   usage: 'sunucubilgi'
 };
