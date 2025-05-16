const Discord = require("discord.js"),
client = new Discord.Client(),
ayarlar = require("../ayarlar.json"),
db = require('quick.db');
 


exports.run = (client, message, args) => {
 
  let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
  
        const yetkiyok = new Discord.MessageEmbed()
      .setTitle("Hata")
      .addField("Yetkin Yetersiz", `❌ Bu Komutu Kullanabilmek İçin \`Mesajları Yönet\` Yetkisine Sahip Olmalısın!`)
      .setColor("RANDOM")

  
if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply(yetkiyok);
  
  if(!args[0]){
    const birşeyyok = new Discord.MessageEmbed()
    .setTitle("HATA")
    .addField("Doğru kullanım", `\`${prefix}otocevap ayarla [yazı] [cevap]\``)
    .addField("Sıfırlamak için", `\`${prefix}otocevap sıfırla\``)
    .setFooter("Sadece 1 tane hakkı vardır her sunucunun")
    .setColor("RANDOM")
    message.channel.send(birşeyyok)
  }
  if(args[0] === 'sıfırla'){
  db.delete(`soru_${message.guild.id}`, args[1])
  db.delete(`cevap_${message.guild.id}`, args[2])
    const sıfırla = new Discord.MessageEmbed()
    .setTitle(`OTO CEVAP`)
    .addField("Başarılı", `oto cevap sıfırlandı`)
    .setColor("RANDOM")
  message.channel.send(sıfırla)
  }
  if(args[0] === 'ayarla'){
      const soruyok = new Discord.MessageEmbed()
      .setTitle("Hata")
      .addField("Oto cevap", `Soru yazmalısın`)
      .setColor("RANDOM")
      const cevapyok = new Discord.MessageEmbed()
      .setTitle("Hata")
      .addField("Oto cevap", `Cevap yazmalısın`)
      .setColor("RANDOM")
  if(!args[1]) return message.channel.send(soruyok).then(msg => msg.delete(3000));
  if(!args[2]) return message.channel.send(cevapyok).then(msg => msg.delete(3000));


    
    const başarılı = new Discord.MessageEmbed()
    .setTitle("OTO CEVAP")
    .addField("Başarılı", `Oto cevap ayarlandı artık \`${args[1]}\` yazıldığında \`${args[2]}\` cevabını verecek`)
    .setFooter("Sadece 1 tane hakkı vardır her sunucunun")
    .setColor("RANDOM")
  db.set(`soru_${message.guild.id}`, args[1])
  db.set(`cevap_${message.guild.id}`, args[2])
  message.channel.send(başarılı)
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['otocevap'],
  permLevel: 0
};

exports.help = {
  name: 'otocevap',
  description: 'otocevap',
  usage: 'otocevap'
};