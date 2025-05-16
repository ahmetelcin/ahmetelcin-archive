const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
 
  let user = message.author
  let sebep = args.join(" ")
 
  if (!sebep) return message.channel.send(`**Bir sebep yazmalısın.**`)
  
  db.set(`afk_${user.id}`, sebep)
                const embed = new Discord.MessageEmbed()
                .setAuthor("AFK")
                .addField("GİTTİ",  `**<@${user.id}>**\` şu anda AFK\``)
                .addField("Sebep", `\`${sebep}\``)
                .setColor("RANDOM")
       message.channel.send({embed})
  };

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