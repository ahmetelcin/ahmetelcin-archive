const Discord = require('discord.js');
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")

exports.run = async(client, message, args) => {
  
    const yetkiyok = new Discord.MessageEmbed()
  .setTitle("YesBan Log")
  .addField("HATA", `Bu komutu kullanmak için \`Kanalları Yönet\` yetkisine sahip olmalısın`)
  .setColor("RANDOM")
    if (!message.member.hasPermission("MANAGE_CHANNELS"))return message.channel.send(yetkiyok)
  
    const prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix;
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`Doğru kullanım: \`${prefix}yavaş-mod [süre]\``)
                .setColor('RANDOM')
                .setTimestamp()
            message.channel.send({embed})
            return
          }
/////limit yeri
    message.channel.send(new Discord.MessageEmbed().setDescription(`Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`).setColor('RANDOM'));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 0,
};

exports.help = {
  name: 'yavaş-mod',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'yavaş-mod [1/10]',
};
