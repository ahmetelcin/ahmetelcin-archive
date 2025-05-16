const db = require("quick.db")
const discord = require("discord.js")
const ayarlar = require('../ayarlar.json');
const TCMB_Doviz = require('tcmb-doviz');
const Doviz = new TCMB_Doviz();
const { randomRange, verify } = require('../util/Util.js');
var ekonomi = new db.table('ekonomi')

module.exports.run = async (client, message, args) => {
  
    var alımsayısı = await ekonomi.fetch(`alınacaksayı${message.author.id}`)

      let user = message.mentions.users.first() || message.author;
    const prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix;

    let purchase = args[0];
  
  const satılacakeşyalar = new discord.MessageEmbed()
  .setTitle("YesBan Bankası")
  .addField("Satılabilir eşyalar", `\`${prefix}sat USD [MİKTAR]\` \n\`${prefix}sat EUR [MİKTAR]\``)
  .setColor("RANDOM")
  if(!purchase) return message.channel.send(satılacakeşyalar)
  
  let items = await ekonomi.fetch(message.author.id, { items: [] });
    let amount = await ekonomi.fetch(`money_${message.guild.id}_${message.author.id}`)


      if(purchase === 'USD'){
                const res = await Doviz.getKur("USD");
        
        const dölar = await ekonomi.fetch(`dölar_${message.guild.id}_${message.author.id}`)

        const argsyok2 = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("HATA", `Ne kadar satılcağını girmediniz`)
        .addField("Doğru kullanım", `${prefix}sat USD [MİKTAR]`)
                .setColor("RANDOM")
          if(!args[1]) return message.channel.send(argsyok2).then(msg => msg.delete(6000));

        
      const USD = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Satma",`Yeterli ${res.isim} yok`)
      .setColor("RANDOM")
        if(dölar < 1 * args[1]) return message.channel.send(USD);

     const USD2 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Satın alma",`${args[1]} tane ${res.isim} satmak istiyormusun \`evet\` ya da \`hayır\``)
      .setColor("RANDOM")
      message.channel.send(USD2)
        
                            message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 1, time: 30000}).then(collected => {
                      
      if (collected.first().content.toLowerCase() == 'evet') {
        const evet = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("Başarılı", `${args[1]} kadar ${res.isim} satıldı`)
        .setColor("RANDOM")
                ekonomi.subtract(`dölar_${message.guild.id}_${message.author.id}`, args[1]);
        ekonomi.add(`money_${message.guild.id}_${message.author.id}`, res.satis * args[1]);
      message.channel.send(evet);
      }else  if (collected.first().content.toLowerCase() == 'hayır') {
                const hayır = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("Başarısız", `${args[1]} tane ${res.isim} satılmadı`)
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
                          
            

      if(purchase === 'EUR'){
                   const res = await Doviz.getKur("EUR");
        
                const avro = await ekonomi.fetch(`avro_${message.guild.id}_${message.author.id}`)

        const argsyok = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("HATA", `Ne kadar satılcağını girmediniz`)
        .addField("Doğru kullanım", `${prefix}sat EUR [MİKTAR]`)
                .setColor("RANDOM")
          if(!args[1])return message.channel.send(argsyok).then(msg => msg.delete(6000));
        

     const EUR = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Satın alma",`${args[1]} tane ${res.isim} satmak istiyormusun \`evet\` ya da \`hayır\``)
      .setColor("RANDOM")
      message.channel.send(EUR)
        
                            message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 1, time: 30000}).then(collected => {
                      
      if (collected.first().content.toLowerCase() == 'evet') {
        const evet2 = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("Başarılı", `${args[1]} kadar ${res.isim} satıldı`)
        .setColor("RANDOM")
                ekonomi.subtract(`avro_${message.guild.id}_${message.author.id}`, args[1]);
        ekonomi.add(`money_${message.guild.id}_${message.author.id}`, res.satis * args[1]);
      message.channel.send(evet2);
      }else  if (collected.first().content.toLowerCase() == 'hayır') {
                const hayır2 = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("Başarısız", `${args[1]} tane ${res.isim} satılmadı`)
        .setColor("RANDOM")
         message.channel.send(hayır2);
      }
                    }).catch(() => {
                      const cevapyok2 = new discord.MessageEmbed()
                      .setTitle("YesBan Bankası")
                      .addField("HATA", `30 saniyede cevap vermedin`)
                      .setColor("RANDOM")
                                    message.channel.send(cevapyok2);
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
    name: 'sat', 
    description: "sat",
    usage: 'sat'
  }