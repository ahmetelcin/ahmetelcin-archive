const db = require("quick.db")
const discord = require("discord.js")
const ayarlar = require('../ayarlar.json');
const TCMB_Doviz = require('tcmb-doviz');
const Doviz = new TCMB_Doviz();
const { randomRange, verify } = require('../util/Util.js');
var ekonomi = new db.table('ekonomi')

module.exports.run = async (client, message, args) => {
  
    var alımsayısı = await db.fetch(`alınacaksayı${message.author.id}`)

      let user = message.mentions.users.first() || message.author;
    const prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix;
  const mesleği = ekonomi.fetch(`meslek_${message.guild.id}_${message.author.id}`)

    let purchase = args[0];
  
  const satılacakeşyalar = new discord.MessageEmbed()
  .setTitle("YesBan Bankası")
  .addField("Meslekler", `\`${prefix}meslek temizlikçi \nKazanç: 100 \nFiyat: bedava\` \n\n\`${prefix}meslek mühendis \nKazanç: 1000 \nFiyat: 20000\` \n\n\`${prefix}meslek yazılımcı \nKazanç: 500 \nFiyat: 10000\` \n\n\`${prefix}meslek çiftçi \nKazanç: 250 \nFiyat: 5000\``)
  .setColor("RANDOM")
  
  if(!purchase) return message.channel.send(satılacakeşyalar)
  
  let items = await ekonomi.fetch(message.author.id, { items: [] });
    let amount = await ekonomi.fetch(`money_${message.guild.id}_${message.author.id}`)


      if(purchase === 'temizlikçi'){        

        const aynımeslek = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("HATA", `Mesleğin aynı`)
        .setColor("RANDOM")
        if(mesleği === 'temizlikçi') return message.channel.send(aynımeslek).then(msg => msg.delete(6000));
        
      const soru = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Meslek",`Temizlikçi olmak istiyormusun \`evet\` ya da \`hayır\` \n\n \`ÖNEMLİ: BU İŞLEM GERİ ALINAMAZ\``)
      .setColor("RANDOM")
      message.channel.send(soru)
        
                            message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 2, time: 30000}).then(collected => {
                      
      if (collected.first().content.toLowerCase() == 'evet') {
        const evet = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("Başarılı", `Temizlikçi oldun`)
        .setColor("RANDOM")
ekonomi.set(`meslek_${message.guild.id}_${message.author.id}`, 'temizlikçi')
      message.channel.send(evet);
      }else  if (collected.first().content.toLowerCase() == 'hayır') {
                const hayır = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("Başarısız", `Temizlikçi olmadın`)
        .setColor("RANDOM")
         message.channel.send(hayır);
      }
                    }).catch(() => {
                      const cevapyok = new discord.MessageEmbed()
                      .setTitle("YesBan Bankası")
                      .addField("HATA", `30 saniyede cevap vermedin`)
                      .setColor("RANDOM")
                                    message.channel.send(cevapyok);
                            }
                             )}


      if(purchase === 'mühendis'){        
          
                const aynımeslek2 = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("HATA", `Mesleğin aynı`)
        .setColor("RANDOM")
        if(mesleği === 'mühendis') return message.channel.send(aynımeslek2).then(msg => msg.delete(6000));
        
      const parayetersiz2 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Meslek",`Paran yok çalış`)
      .setColor("RANDOM")
        if(20000 < 1) return message.channel.send(parayetersiz2);

      const soru = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Meslek",`Mühendis olmak istiyormusun \`evet\` ya da \`hayır\` \n\n \`ÖNEMLİ: BU İŞLEM GERİ ALINAMAZ\``)
      .setColor("RANDOM")
      message.channel.send(soru)
        
                            message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 2, time: 30000}).then(collected => {
                      
      if (collected.first().content.toLowerCase() == 'evet') {
        const evet = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("Başarılı", `Mühendis oldun`)
        .setColor("RANDOM")
        ekonomi.subtract(`money_${message.guild.id}_${message.author.id}`, 20000)
ekonomi.set(`meslek_${message.guild.id}_${message.author.id}`, 'mühendis')
      message.channel.send(evet);
      }else  if (collected.first().content.toLowerCase() == 'hayır') {
                const hayır = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("Başarısız", `Mühendis olmadın`)
        .setColor("RANDOM")
         message.channel.send(hayır);
      }
                    }).catch(() => {
                      const cevapyok = new discord.MessageEmbed()
                      .setTitle("YesBan Bankası")
                      .addField("HATA", `30 saniyede cevap vermedin`)
                      .setColor("RANDOM")
                                    message.channel.send(cevapyok);
                            }
                             )}


      if(purchase === 'yazılımcı'){        
          
                const aynımeslek2 = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("HATA", `Mesleğin aynı`)
        .setColor("RANDOM")
        if(mesleği === 'yazılımcı') return message.channel.send(aynımeslek2).then(msg => msg.delete(6000));
        
      const parayetersiz2 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Meslek",`Paran yok çalış`)
      .setColor("RANDOM")
        if(10000 < 1) return message.channel.send(parayetersiz2);

      const soru = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Meslek",`Yazılımcı olmak istiyormusun \`evet\` ya da \`hayır\` \n\n \`ÖNEMLİ: BU İŞLEM GERİ ALINAMAZ\``)
      .setColor("RANDOM")
      message.channel.send(soru)
        
                            message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 2, time: 30000}).then(collected => {
                      
      if (collected.first().content.toLowerCase() == 'evet') {
        const evet = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("Başarılı", `Yazılımcı oldun`)
        .setColor("RANDOM")
                ekonomi.subtract(`money_${message.guild.id}_${message.author.id}`, 10000)
ekonomi.set(`meslek_${message.guild.id}_${message.author.id}`, 'yazılımcı')
      message.channel.send(evet);
      }else  if (collected.first().content.toLowerCase() == 'hayır') {
                const hayır = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("Başarısız", `Yazılımcı olmadın`)
        .setColor("RANDOM")
         message.channel.send(hayır);
      }
                    }).catch(() => {
                      const cevapyok = new discord.MessageEmbed()
                      .setTitle("YesBan Bankası")
                      .addField("HATA", `30 saniyede cevap vermedin`)
                      .setColor("RANDOM")
                                    message.channel.send(cevapyok);
                            }
                             )}
  
        if(purchase === 'çiftçi'){        
          
                const aynımeslek2 = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("HATA", `Mesleğin aynı`)
        .setColor("RANDOM")
        if(mesleği === 'çiftçi') return message.channel.send(aynımeslek2).then(msg => msg.delete(6000));
        
      const parayetersiz2 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Meslek",`Paran yok çalış`)
      .setColor("RANDOM")
        if(5000 < 1) return message.channel.send(parayetersiz2);

      const soru = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Meslek",`Çiftçi olmak istiyormusun \`evet\` ya da \`hayır\` \n\n \`ÖNEMLİ: BU İŞLEM GERİ ALINAMAZ\``)
      .setColor("RANDOM")
      message.channel.send(soru)
        
                            message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 2, time: 30000}).then(collected => {
                      
      if (collected.first().content.toLowerCase() == 'evet') {
        const evet = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("Başarılı", `Çiftçi oldun`)
        .setColor("RANDOM")
                ekonomi.subtract(`money_${message.guild.id}_${message.author.id}`, 5000)
ekonomi.set(`meslek_${message.guild.id}_${message.author.id}`, 'çiftçi')
      message.channel.send(evet);
      }else  if (collected.first().content.toLowerCase() == 'hayır') {
                const hayır = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("Başarısız", `Çiftçi olmadın`)
        .setColor("RANDOM")
         message.channel.send(hayır);
      }
                    }).catch(() => {
                      const cevapyok = new discord.MessageEmbed()
                      .setTitle("YesBan Bankası")
                      .addField("HATA", `30 saniyede cevap vermedin`)
                      .setColor("RANDOM")
                                    message.channel.send(cevapyok);
                            }
                             )}
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [], 
    permLevel: 0
  };
  exports.help = {
    name: 'meslek', 
    description: "meslek",
    usage: 'meslek'
  }