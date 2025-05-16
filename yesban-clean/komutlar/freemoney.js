const db = require("quick.db")
const discord = require("discord.js")
const ms = require("parse-ms")
var ekonomi = new db.table('ekonomi')

module.exports.run = async (client, message, args) => {
    if(message.author.id === "701406325438939196"){
    let user = message.mentions.users.first();
    let timeout = 0;
    if(!user) return message.channel.send('Kime para vercen?')


    let daily = await ekonomi.fetch(`daily_${message.guild.id}_${user.id}`);

    if(daily !== null && timeout - (Date.now() - daily) > 0){
        let time = ms(timeout - (Date.now() - daily));
      
      const günlük = new discord.RichEmbed()
      .setTitle("YesBan Bankası")
      .addField("FREEMANİ",`Bir daha toplaman için ${time.hours}saat, ${time.minutes}dakika, ${time.seconds}saniye kaldı.`)
      .setColor("RANDOM")

        return message.channel.send(günlük)
    } else {
        ekonomi.add(`money_${message.guild.id}_${user.id}`, args[1]);
      
            const günlükpara = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("FREEMANİ",`Başarılı! ${args[1]}TL hesabına aktarıldı.`)
      .setColor("RANDOM")
      
        message.channel.send(günlükpara)
    }
    }
  
      if(message.author.id === "496720140143034378"){
    let user = message.mentions.users.first();
    let timeout = 0;
    if(!user) return message.channel.send('Kime para vercen?')


    let daily = await ekonomi.fetch(`daily_${message.guild.id}_${user.id}`);

    if(daily !== null && timeout - (Date.now() - daily) > 0){
        let time = ms(timeout - (Date.now() - daily));
      
      const günlük = new discord.RichEmbed()
      .setTitle("YesBan Bankası")
      .addField("FREEMANİ",`Bir daha toplaman için ${time.hours}saat, ${time.minutes}dakika, ${time.seconds}saniye kaldı.`)
      .setColor("RANDOM")

        return message.channel.send(günlük)
    } else {
        ekonomi.add(`money_${message.guild.id}_${user.id}`, args[1]);
      
            const günlükpara = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("FREEMANİ",`Başarılı! ${args[1]}TL hesabına aktarıldı.`)
      .setColor("RANDOM")
      
        message.channel.send(günlükpara)
    }
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['freemoney'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'freemoney',
    description: 'freemoney',
    usage: 'freemoney'
  };
