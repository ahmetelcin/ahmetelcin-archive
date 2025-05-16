const discord = require("discord.js")
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {

    const prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix;
  
    const market = new discord.MessageEmbed()
    .setTitle('Market')
    .addField("Cephane", `S400 1000 <:samasidedolar:771015664453943316>  \n Ölü Balina 3100 <:samasidedolar:771015664453943316> \n Savaş Uçağı 1000 <:samasidedolar:771015664453943316> `, true)
    .addField("Döviz", `${prefix}döviz`, true)
    .addField("Kullanım", `${prefix}satınal [eşya adı]`, false)
    .setTimestamp();

    message.channel.send(market)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['market','store'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'market',
    description: 'market',
    usage: 'market'
  };