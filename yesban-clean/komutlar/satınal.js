const db = require("quick.db")
const discord = require("discord.js")
const ayarlar = require('../ayarlar.json');
const TCMB_Doviz = require('tcmb-doviz');
const Doviz = new TCMB_Doviz();
const { randomRange, verify } = require('../util/Util.js');
const ms = require("parse-ms")
var ekonomi = new db.table('ekonomi')

module.exports.run = async (client, message, args) => {
  
      let timeout = 600000;
      let dolarzamanı = await ekonomi.fetch(`dolarzamanı_${message.guild.id}_${message.author.id}`);
      let avrozamanı = await ekonomi.fetch(`avrozamanı_${message.guild.id}_${message.author.id}`);

    var alımsayısı = await ekonomi.fetch(`alınacaksayı${message.author.id}`)

      let user = message.mentions.users.first() || message.author;
    const prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix;

    let purchase = args[0];
    if(!purchase) return message.channel.send('Markette olan item seçin')
    let items = await ekonomi.fetch(message.author.id, { items: [] });
    let amount = await ekonomi.fetch(`money_${message.guild.id}_${message.author.id}`)

    if(purchase === 'S400'){
            const parayoks400 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Satın alma",`Paranyok çalış`)
      .setColor("RANDOM")
        if(amount < 1000) return message.channel.send(parayoks400);
        ekonomi.subtract(`money_${message.guild.id}_${message.author.id}`, 1000);
        ekonomi.add(`s400_${message.guild.id}_${message.author.id}`, 1);
      
      const satınalmas400 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Satın alma",`S400 aldın şimdi istediğin birinde atabilirsin \`${prefix}s400 [Atılacak Kişi]\` `)
      .setColor("RANDOM")
      message.channel.send(satınalmas400)
    }
  
      if(purchase === 's400'){        
            const parayoks401 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Satın alma",`Paranyok çalış`)
      .setColor("RANDOM")
        if(amount < 1000) return message.channel.send(parayoks401);
        ekonomi.subtract(`money_${message.guild.id}_${message.author.id}`, 1000);
        ekonomi.add(`s400_${message.guild.id}_${message.author.id}`, 1);
      
      const satınalmas401 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Satın alma",`S400 aldın şimdi istediğin birinde atabilirsin \`${prefix}s400 [Atılacak Kişi]\` `)
      .setColor("RANDOM")
      message.channel.send(satınalmas401)
    }
  
        if(purchase === 'ölü balina'){
            const parayokbalina = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Satın alma",`Paranyok çalış`)
      .setColor("RANDOM")
        if(amount < 3100) return message.channel.send(parayokbalina);
        ekonomi.subtract(`money_${message.guild.id}_${message.author.id}`, 3100);
        ekonomi.add(`ölübalina_${message.guild.id}_${message.author.id}`, 1);

      const satınalbalina = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Satın alma",`ölü balina aldın şimdi istediğin birinde atabilirsin \`${prefix}ölübalina [Atılacak Kişi]\` `)
      .setColor("RANDOM")
      message.channel.send(satınalbalina)
    }
  
        if(purchase === 'ölübalina'){
            const parayokbalina = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Satın alma",`Paranyok çalış`)
      .setColor("RANDOM")
        if(amount < 3100) return message.channel.send(parayokbalina);
        ekonomi.subtract(`money_${message.guild.id}_${message.author.id}`, 3100);
        ekonomi.add(`ölübalina_${message.guild.id}_${message.author.id}`, 1);
      
      const satınalbalina = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Satın alma",`ölü balina aldın şimdi istediğin birinde atabilirsin \`${prefix}ölübalina [Atılacak Kişi]\` `)
      .setColor("RANDOM")
      message.channel.send(satınalbalina)
    }
  
      if(purchase === 'Savaş Uçağı'){
            const SavaşUçağı = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Satın alma",`Paranyok çalış`)
      .setColor("RANDOM")
        if(amount < 1000) return message.channel.send(SavaşUçağı);
        ekonomi.subtract(`money_${message.guild.id}_${message.author.id}`, 1000);
        ekonomi.add(`savaşuçağı_${message.guild.id}_${message.author.id}`, 1);
      
      const SavaşUçağı2 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Satın alma",`S400 aldın şimdi istediğin birinde atabilirsin \`${prefix}savaşuçağı [Atılacak Kişi]\` `)
      .setColor("RANDOM")
      message.channel.send(SavaşUçağı2)
    }
        if(purchase === 'savaşuçağı'){
            const SavaşUçağı3 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Satın alma",`Paranyok çalış`)
      .setColor("RANDOM")
        if(amount < 1000) return message.channel.send(SavaşUçağı3);
        ekonomi.subtract(`money_${message.guild.id}_${message.author.id}`, 1000);
        ekonomi.add(`savaşuçağı_${message.guild.id}_${message.author.id}`, 1);
      
      const SavaşUçağı4 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Satın alma",`S400 aldın şimdi istediğin birinde atabilirsin \`${prefix}savaşuçağı [Atılacak Kişi]\` `)
      .setColor("RANDOM")
      message.channel.send(SavaşUçağı4)
    }
      if(purchase === 'USD'){
                const res = await Doviz.getKur("USD");

                if(dolarzamanı !== null && timeout - (Date.now() - dolarzamanı) > 0){
        let time = ms(timeout - (Date.now() - dolarzamanı));

      const dolarzamanı2 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Satın alma", `Bir daha satın alman için ${time.minutes}dakika, ${time.seconds}saniye kaldı.`)
      .setColor("RANDOM")

        return message.channel.send(dolarzamanı2)}
                  
        const argsyok2 = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("HATA", `Ne kadar alınıcağını girmediniz`)
        .addField("Doğru kullanım", `${prefix}satınal USD [MİKTAR]`)
                .setColor("RANDOM")
          if(!args[1]) return message.channel.send(argsyok2).then(msg => msg.delete(6000));
          if(args[1] < 1) return message.channel.send(argsyok2).then(msg => msg.delete(6000));

        
      const USD = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Satın alma",`Paranyok çalış`)
      .setColor("RANDOM")
        if(amount < res.alis * args[1]) return message.channel.send(USD);

              ekonomi.set(`alınacaksayı${message.author.id}`, args[1])
      const USD2 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Satın alma",`${args[1]} tane ${res.isim} almak istiyormusun \`evet\` ya da \`hayır\``)
      .setColor("RANDOM")
      message.channel.send(USD2)
        
                            message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 1, time: 30000}).then(collected => {
                      
      if (collected.first().content.toLowerCase() == 'evet') {
                ekonomi.set(`dolarzamanı_${message.guild.id}_${user.id}`, Date.now());
        const evet = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("Başarılı", `${args[1]} kadar ${res.isim} hesabınıza aktarıldı`)
        .setColor("RANDOM")
                ekonomi.subtract(`money_${message.guild.id}_${message.author.id}`, res.alis * args[1]);
        ekonomi.add(`dölar_${message.guild.id}_${message.author.id}`, args[1]);
      message.channel.send(evet);
      }else  if (collected.first().content.toLowerCase() == 'hayır') {
                const hayır = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("Başarısız", `${args[1]} tane ${res.isim} hesabınıza aktarılmadı`)
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
        
                if(avrozamanı !== null && timeout - (Date.now() - avrozamanı) > 0){
        let time = ms(timeout - (Date.now() - avrozamanı));

      const avrozamanı2 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Satın alma", `Bir daha satın alman için ${time.minutes}dakika, ${time.seconds}saniye kaldı.`)
      .setColor("RANDOM")

        return message.channel.send(avrozamanı2)}


        const argsyok = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("HATA", `Ne kadar alınıcağını girmediniz`)
        .addField("Doğru kullanım", `${prefix}satınal EUR [MİKTAR]`)
                .setColor("RANDOM")
          if(!args[1]) return message.channel.send(argsyok).then(msg => msg.delete(6000));
          if(args[1] < 1) return message.channel.send(argsyok).then(msg => msg.delete(6000));

                    const EUR = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Satın alma",`Paranyok çalış`)
      .setColor("RANDOM")
        if(amount < res.alis * args[1]) return message.channel.send(EUR);

      
      ekonomi.set(`alınacaksayı${message.author.id}`, args[1])
      const EUR2 = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Satın alma",`${args[1]} tane ${res.isim} almak istiyormusun \`evet\` ya da \`hayır\``)
      .setColor("RANDOM")
      message.channel.send(EUR2)
        
                    message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 1, time: 30000}).then(collected => {
                      
      if (collected.first().content.toLowerCase() == 'evet') {
                        ekonomi.set(`avrozamanı_${message.guild.id}_${user.id}`, Date.now());
        const evet = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("Başarılı", `${args[1]} kadar ${res.isim} hesabınıza aktarıldı`)
        .setColor("RANDOM")
                ekonomi.subtract(`money_${message.guild.id}_${message.author.id}`, res.alis * args[1]);
        ekonomi.add(`avro_${message.guild.id}_${message.author.id}`, args[1]);
      message.channel.send(evet);
      }else  if (collected.first().content.toLowerCase() == 'hayır') {
                const hayır = new discord.MessageEmbed()
        .setTitle("YesBan Bankası")
        .addField("Başarısız", `${args[1]} tane ${res.isim} hesabınıza aktarılmadı`)
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
    name: 'satınal', 
    description: "satın al.", 
    usage: 'satın al'
  }