const discord = require("discord.js")
const db = require("quick.db")
const ms = require("parse-ms")
const ayarlar = require("../ayarlar.json")
var ekonomi = new db.table('ekonomi')

module.exports.run = async (client, message, args) => {
    let user = message.author;
    let timeout = 43200000;
    let author = await ekonomi.fetch(`worked_${message.guild.id}_${user.id}`);

      const prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix;
  const meslek = ekonomi.fetch(`meslek_${message.guild.id}_${message.author.id}`)

  if(meslek === "null"){
    const mesleğiyok = new discord.MessageEmbed()
    .setTitle("YesBan Bankası")
    .addField("HATA", `Mesleğin yok meslek seçmek içim \`${prefix}meslek\``)
    .setColor("RANDOM")
  }

    if(author !== null && timeout - (Date.now() - author) > 0){
        let time = ms(timeout - (Date.now() - author));
      
          const embed = new discord.MessageEmbed()
          .setTitle(`YesBan Bankası`)
          .addField("Bekle",`Bir daha çalışman için ${time.hours}saat ${time.minutes}dakika ${time.seconds}saniye sonra çalışabilirsin!`)
          .setColor("RANDOM")
      
        return message.channel.send(embed)
    } else {
       
                              if(meslek === 'PUTİN'){
      ekonomi.add(`money_${message.guild.id}_${user.id}`, 20000)
      const parakazandın2 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Başarılı", `Çalıştın ve 20000 <:samasidedolar:771015664453943316> kazandın`)
      .setColor("RANDOM")
      message.channel.send(parakazandın2)
       }
      
                                    if(meslek === 'POLIP'){
      ekonomi.add(`money_${message.guild.id}_${user.id}`, 10000)
      const parakazandın2 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Başarılı", `Çalıştın ve 10000 <:samasidedolar:771015664453943316> kazandın`)
      .setColor("RANDOM")
                  ekonomi.set(`worked_${message.guild.id}_${user.id}`, Date.now());
      message.channel.send(parakazandın2)
       }
      
                                    if(meslek === 'BOTTESTER'){
      ekonomi.add(`money_${message.guild.id}_${user.id}`, 10000)
      const parakazandın2 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Başarılı", `Çalıştın ve 10000 <:samasidedolar:771015664453943316> kazandın`)
      .setColor("RANDOM")
                  ekonomi.set(`worked_${message.guild.id}_${user.id}`, Date.now());
      message.channel.send(parakazandın2)
       }
      
                                    if(meslek === 'ZIKKIM'){
      ekonomi.add(`money_${message.guild.id}_${user.id}`, 10000)
      const parakazandın2 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Başarılı", `Çalıştın ve 10000 <:samasidedolar:771015664453943316> kazandın`)
      .setColor("RANDOM")
                  ekonomi.set(`worked_${message.guild.id}_${user.id}`, Date.now());
      message.channel.send(parakazandın2)
       }
      
                                    if(meslek === 'BAYTEX'){
      ekonomi.add(`money_${message.guild.id}_${user.id}`, 10000)
      const parakazandın2 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Başarılı", `Çalıştın ve 10000 <:samasidedolar:771015664453943316> kazandın`)
      .setColor("RANDOM")
                  ekonomi.set(`worked_${message.guild.id}_${user.id}`, Date.now());
      message.channel.send(parakazandın2)
       }
      
                                    if(meslek === 'MUMUTÖÇ'){
      ekonomi.add(`money_${message.guild.id}_${user.id}`, 10000)
      const parakazandın2 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Başarılı", `Çalıştın ve 10000 <:samasidedolar:771015664453943316> kazandın`)
      .setColor("RANDOM")
                  ekonomi.set(`worked_${message.guild.id}_${user.id}`, Date.now());
      message.channel.send(parakazandın2)
       }
      
                                    if(meslek === 'KİDİ'){
      ekonomi.add(`money_${message.guild.id}_${user.id}`, 10000)
      const parakazandın2 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Başarılı", `Çalıştın ve 10000 <:samasidedolar:771015664453943316> kazandın`)
      .setColor("RANDOM")
                  ekonomi.set(`worked_${message.guild.id}_${user.id}`, Date.now());
      message.channel.send(parakazandın2)
       }
      
      if(meslek === 'temizlikçi'){
      ekonomi.add(`money_${message.guild.id}_${user.id}`, 100)
      const parakazandın = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Başarılı", `Çalıştın ve 100 <:samasidedolar:771015664453943316> kazandın`)
      .setColor("RANDOM")
      ekonomi.set(`worked_${message.guild.id}_${user.id}`, Date.now());
      message.channel.send(parakazandın)
       }
      
            if(meslek === 'mühendis'){
      ekonomi.add(`money_${message.guild.id}_${user.id}`, 1000)
      const parakazandın2 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Başarılı", `Çalıştın ve 1000 <:samasidedolar:771015664453943316> kazandın`)
      .setColor("RANDOM")
            ekonomi.set(`worked_${message.guild.id}_${user.id}`, Date.now());
      message.channel.send(parakazandın2)
       }
      
                  if(meslek === 'yazılımcı'){
      ekonomi.add(`money_${message.guild.id}_${user.id}`, 500)
      const parakazandın2 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Başarılı", `Çalıştın ve 500 <:samasidedolar:771015664453943316> kazandın`)
      .setColor("RANDOM")
            ekonomi.set(`worked_${message.guild.id}_${user.id}`, Date.now());
      message.channel.send(parakazandın2)
       }
      
                        if(meslek === 'çiftçi'){
      ekonomi.add(`money_${message.guild.id}_${user.id}`, 250)
      const parakazandın2 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Başarılı", `Çalıştın ve 250 <:samasidedolar:771015664453943316> kazandın`)
      .setColor("RANDOM")
            ekonomi.set(`worked_${message.guild.id}_${user.id}`, Date.now());
      message.channel.send(parakazandın2)
       }
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['çalış'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'çalış',
    description: 'çalış',
    usage: 'çalış'
  };