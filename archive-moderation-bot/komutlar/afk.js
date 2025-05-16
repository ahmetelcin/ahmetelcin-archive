const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {

  let user = message.author
  let sebep = args.join(" ")

  if (!sebep){
    db.set(`afk_${user.id}`, "Canı istemiş")
    db.set(`afk_taym_${user.id}`, Date.now())
    const embed = new Discord.MessageEmbed()
    .setTitle(ayarlar.kullanıcı_title)
    .addField("AFK", `<@${message.author.id}> şu anda AFK`)
    .addField("Sebep", `Canı istemiş`)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send({embed})
  }else{
    db.set(`afk_${user.id}`, sebep)
    db.set(`afk_taym_${user.id}`, Date.now())

    const embed = new Discord.MessageEmbed()
    .setTitle(ayarlar.kullanıcı_title)
    .addField("AFK", `<@${message.author.id}> şu anda AFK`)
    .addField("Sebep", `${sebep}`)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send({embed})

  }};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'afk',
  description: "AFK olmanızı sağlar.",
  usage: 'afk <sebep>'
}