const Discord = require("discord.js")
const client = new Discord.Client()
const TCMB_Doviz = require('tcmb-doviz');
const Doviz = new TCMB_Doviz();
const ayarlar = require("../ayarlar.json")
const db = require("quick.db")
exports.run = async (client, message, args) => {

  const prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix;

    if(!args[0]) {
        let embed = new Discord.MessageEmbed();
        embed.setDescription(":x: Hata | Doğru kullanım = "+ ayarlar.prefix + `döviz [BİRİM KODU] \n Birim kodları = \`\`USD EUR\`\``);
        embed.setFooter("Bunlar gerçekle aynı sayılardır")
        embed.setColor("RED");
        message.channel.send({embed: embed});
    }
    if (args[0] === "USD"){
        const res = await Doviz.getKur("USD");
        const tarih = await Doviz.guncelTarih();
        let embed = new Discord.MessageEmbed();
        embed.setAuthor(`${res.isim} şuanlık değişim analizleri`,message.author.avatarURL)
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) tarafından alınmaktatır.\n Yenilenme \`\`${tarih}\`\` `);
        embed.setColor("RED");
        embed.addField(`Alış`,res.alis);
        embed.addField(`Satış`,res.satis,true);
        embed.addField(`Birim Kodu Kodu`,res.kod,true);
        embed.setFooter(`${prefix}satınal USD yaparak satın alabilirsiniz`)
        message.channel.send({embed: embed});
    }
   if(args[0] === "EUR"){
const res = await Doviz.getKur("EUR");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} şuanlık değişim analizleri`,message.author.avatarURL)
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) tarafından alınmaktatır.\n Yenilenme \`\`${tarih}\`\` `);
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
embed.setFooter(`${prefix}satınal EUR yaparak satın alabilirsiniz`)
message.channel.send({embed: embed});
   }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["doviz","kur","döviz","kuranaliz","kurgetir","dövizanaliz","usd","euro","dolar","eur"],
  permLevel: 0
};
exports.help = {
  name: 'currency',
  description: 'Güncel Döviz kurlarını gösterir.',
  usage: 'currency'
};