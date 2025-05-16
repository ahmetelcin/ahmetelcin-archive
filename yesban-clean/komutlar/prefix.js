const Discord = require("discord.js"),
client = new Discord.Client(),
ayarlar = require("../ayarlar.json"),
db = require('quick.db');
module.exports.run = async (client, message, args) => {
  let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
 
      const yetkiyok = new Discord.MessageEmbed()
      .setTitle("Hata")
      .addField("Yetkin Yetersiz", `❌ Bu Komutu Kullanabilmek İçin \`Mesajları Yönet\` Yetkisine Sahip Olmalısın!`)
      .setColor("RANDOM")

  
if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply(yetkiyok);
  async function ayarla(veri) {
  db.set(`prefix_${message.guild.id}`, veri)
  }
  async function sıfırla() {
              const check = db.fetch(`prefix_${message.guild.id}`)
		 if(check == null) return message.channel.send("**Prefix Zaten Ayarlanmamış!**").then(msg => msg.delete(3000));
  db.delete(`prefix_${message.guild.id}`)
    
              const sıfırla = new Discord.MessageEmbed()
      .setTitle("Prefix")
      .addField("Sıfırlandı", `\`Prefix Başarıyla Sıfırlandı ve Ana Prefix Olarak Ayarlandı: ${ayarlar.prefix}\``)
      .setColor("RANDOM")
    
  message.channel.send(sıfırla)
    }
  
      const ayarlaprefix = new Discord.MessageEmbed()
      .setTitle("Prefix")
      .addField("Kullanım şekli", `\`${prefix}prefix ayarla <yeniprefix>\``)
      .addField("Sıfırlamak için", `\`${prefix}prefix sıfırla\``)
      .setColor("RANDOM")
  
if(args[0] !== "sıfırla" && args[0] !== "ayarla") return  message.channel.send(ayarlaprefix)
if(args[0] === "sıfırla") {
   await sıfırla()
  }  
if(args[0] === "ayarla") {
  
        const belirt = new Discord.MessageEmbed()
      .setTitle("Prefix")
      .addField("Hata", `\`Bir Prefix Belirtmen Gerek!\``)
      .setColor("RANDOM")
  
  if(!args[1]) return message.channel.send(belirt).then(msg => msg.delete(3000));
  
          const karaktersınırı = new Discord.MessageEmbed()
      .setTitle("Prefix")
      .addField("Hata", `\`Prefix En Fazla 10 Karakter İçere Bilir!\``)
      .setColor("RANDOM")
  
  if(args[1].length > 10) return message.channel.send(karaktersınırı).then(msg => msg.delete(3000));
  
      const aynıprefix = new Discord.MessageEmbed()
      .setTitle("Prefix")
      .addField("Hata", `\`Şuanki prefixin zaten bu\``)
      .setColor("RANDOM")
  
  if(args[1] == prefix) return message.channel.send(aynıprefix)
  if(args[1] ===  "s!") {
    
          const eskiprefix = new Discord.MessageEmbed()
      .setTitle("Prefix")
      .addField("Sıfırlandı", `\`Prefix Başarıyla Sıfırlandı ve Ana Prefix Olarak Ayarlandı: ${ayarlar.prefix}\``)
      .setColor("RANDOM")
    
    message.channel.send(eskiprefix)
    db.delete(`prefix_${message.guild.id}`)  
  } else {
 await ayarla(args[1])
    
              const ayarlaprefix2 = new Discord.MessageEmbed()
      .setTitle("Prefix")
      .addField("Prefix Ayarlandı:", `\`${args[1]}\``)
      .setColor("RANDOM")
    
   message.channel.send(ayarlaprefix2)
  }
  }

}
  
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [], 
  permLevel: 0
};
exports.help = {
  name: 'prefix', 
  description: "Change the bot prefix.", 
  usage: 'prefix'
}