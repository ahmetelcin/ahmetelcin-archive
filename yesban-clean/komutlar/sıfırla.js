const Discord = require("discord.js")
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")
var ekonomi = new db.table('ekonomi')

exports.run = (client, message, args) => {
    
    const prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix;

      let purchase = args[0];

      const argsyok = new Discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Kullanım şekli",`${prefix}sıfırla [cephanelik/döviz/para/meslek]`)
      .addField("NOT", `\`BU İŞLEM GERİ ALINAMAZ\``)
      .setColor("RANDOM")
          if(!args[0]) return message.channel.send(argsyok).then(msg => msg.delete(6000));
  

  
        if(purchase === 'cephanelik'){
                const eminmisin = new Discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Sıfırlama",`DB bilgilerini sıfırlamak istediğine emin misin \`evet\` ya da \`hayır\``)
      .addField("NOT", `\`BU İŞLEM GERİ ALINAMAZ\``)
      .setColor("RANDOM")
      message.channel.send(eminmisin)
           message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 1, time: 30000}).then(collected => {
                   if (collected.first().content.toLowerCase() == 'evet') {
                     ekonomi.delete(`s400_${message.guild.id}_${message.author.id}`)
ekonomi.delete(`ölübalina_${message.guild.id}_${message.author.id}`)
ekonomi.delete(`savaşuçağı_${message.guild.id}_${message.author.id}`)
  const evet = new Discord.RichEmbed()
  .setTitle("YesBan Bankası")
  .addField("BAŞARILI", `DB bilgilerin sıfırlandı`)
  .setFooter("eğer bugunuz çözülmediyse destek sunucusuna gelebilirsiniz")
  .setColor("RANDOM")
  message.channel.send(evet)
                   }else  if (collected.first().content.toLowerCase() == 'hayır') {
                                     const hayır = new Discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("Başarısız", `DB bilgilerin sıfırlanmadı`)
        .setColor("RANDOM")
         message.channel.send(hayır);
                   }

           })
        }
  
          if(purchase === 'döviz'){
                const eminmisin2 = new Discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Sıfırlama",`DB bilgilerini sıfırlamak istediğine emin misin \`evet\` ya da \`hayır\``)
      .addField("NOT", `\`BU İŞLEM GERİ ALINAMAZ\``)
      .setColor("RANDOM")
      message.channel.send(eminmisin2)
           message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 1, time: 30000}).then(collected => {
                   if (collected.first().content.toLowerCase() == 'evet') {
ekonomi.delete(`dölar_${message.guild.id}_${message.author.id}`)
ekonomi.delete(`avro_${message.guild.id}_${message.author.id}`)
  const evet2 = new Discord.MessageEmbed()
  .setTitle("YesBan Bankası")
  .addField("BAŞARILI", `DB bilgilerin sıfırlandı`)
  .setFooter("eğer bugunuz çözülmediyse destek sunucusuna gelebilirsiniz")
  .setColor("RANDOM")
  message.channel.send(evet2)
                   }else  if (collected.first().content.toLowerCase() == 'hayır') {
                                     const hayır2 = new Discord.RichEmbed()
        .setTitle("YesBan Bankası")
        .addField("Başarısız", `DB bilgilerin sıfırlanmadı`)
        .setColor("RANDOM")
         message.channel.send(hayır2);
                   }

           })
        }
  
          if(purchase === 'para'){
                const eminmisin3 = new Discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Sıfırlama",`DB bilgilerini sıfırlamak istediğine emin misin \`evet\` ya da \`hayır\``)
      .addField("NOT", `\`BU İŞLEM GERİ ALINAMAZ\``)
      .setColor("RANDOM")
      message.channel.send(eminmisin3)
           message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 1, time: 30000}).then(collected => {
                   if (collected.first().content.toLowerCase() == 'evet') {
ekonomi.delete(`money_${message.guild.id}_${message.author.id}`)
  const evet3 = new Discord.MessageEmbed()
  .setTitle("YesBan Bankası")
  .addField("BAŞARILI", `DB bilgilerin sıfırlandı`)
  .setFooter("eğer bugunuz çözülmediyse destek sunucusuna gelebilirsiniz")
  .setColor("RANDOM")
  message.channel.send(evet3)
                   }else  if (collected.first().content.toLowerCase() == 'hayır') {
                                     const hayır3 = new Discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("Başarısız", `DB bilgilerin sıfırlanmadı`)
        .setColor("RANDOM")
         message.channel.send(hayır3);
                   }

           })
        }
  
          if(purchase === 'meslek'){
                const eminmisin4 = new Discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Sıfırlama",`DB bilgilerini sıfırlamak istediğine emin misin \`evet\` ya da \`hayır\``)
      .addField("NOT", `\`BU İŞLEM GERİ ALINAMAZ\``)
      .setColor("RANDOM")
      message.channel.send(eminmisin4)
           message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 1, time: 30000}).then(collected => {
                   if (collected.first().content.toLowerCase() == 'evet') {
ekonomi.delete(`meslek_${message.guild.id}_${message.author.id}`)
  const evet4 = new Discord.MessageEmbed()
  .setTitle("YesBan Bankası")
  .addField("BAŞARILI", `DB bilgilerin sıfırlandı`)
  .setFooter("eğer bugunuz çözülmediyse destek sunucusuna gelebilirsiniz")
  .setColor("RANDOM")
  message.channel.send(evet4)
                   }else  if (collected.first().content.toLowerCase() == 'hayır') {
                                     const hayır4 = new Discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("Başarısız", `DB bilgilerin sıfırlanmadı`)
        .setColor("RANDOM")
         message.channel.send(hayır4);
                   }

           })
        }
  
}





exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sıfırla',
  description: 'sıfırla',
  usage: 'sıfırla'
};