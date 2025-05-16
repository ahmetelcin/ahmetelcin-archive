const db = require("quick.db")
const discord = require("discord.js")
const ms = require("parse-ms")
var ekonomi = new db.table('ekonomi')

module.exports.run = async (client, message, args) => {
    let user = message.author;
    let timeout = 86400000;
    let amount = 500;

    let daily = await ekonomi.fetch(`daily_${message.guild.id}_${user.id}`);

    if(daily !== null && timeout - (Date.now() - daily) > 0){
        let time = ms(timeout - (Date.now() - daily));
      
      const günlük = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Günlük",`Bir daha toplaman için ${time.hours}saat, ${time.minutes}dakika, ${time.seconds}saniye kaldı.`)
      .setColor("RANDOM")

        return message.channel.send(günlük)
    } else {
        ekonomi.add(`money_${message.guild.id}_${user.id}`, amount);
        ekonomi.set(`daily_${message.guild.id}_${user.id}`, Date.now());
      
            const günlükpara = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Günlük",`Başarılı! ${amount} <:samasidedolar:771015664453943316>  hesabına aktarıldı.`)
      .setColor("RANDOM")
      
        message.channel.send(günlükpara)
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['günlük'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'günlük',
    description: 'günlük',
    usage: 'günlük'
  };
