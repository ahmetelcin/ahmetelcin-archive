const Discord = require("discord.js")
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
  const logak = db.fetch(`logak_${message.guild.id}`)
  const mesajedit = db.fetch(`mesajedit_${message.guild.id}`)
  const logkanalıid = db.fetch(`logkanalid_${message.guild.id}`)
      const prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix;

    const yetkiyok = new Discord.MessageEmbed()
  .setTitle("YesBan Log")
  .addField("HATA", `Bu komutu kullanmak için \`Kanalları Yönet\` yetkisine sahip olmalısın`)
  .setColor("RANDOM")
    if (!message.member.hasPermission("MANAGE_CHANNELS"))return message.channel.send(yetkiyok)
  
          const argsyok2 = new Discord.MessageEmbed()
        .setTitle("YesBan LOG")
        .addField("Açmak için", `${prefix}log aç/kapat`)
        .addField("Sıfırlamak için", `${prefix}log sıfırla`)
        .addField("Kanal ayarlamak için", `${prefix}log kanal [kanalid]`)
                .setColor("RANDOM")
          if(!args[0]) return message.channel.send(argsyok2).then(msg => msg.delete(10000));
  
  if(args[0] === "aç"){
    db.set(`logak_${message.guild.id}`, "açık")
    const aç = new Discord.MessageEmbed()
    .setTitle("YesBan LOG")
    .addField("Başarılı", `Log açıldı`)
    .addField("Log özellikleri için", `${prefix}log özellik`)
    .addField("Kanal ayarlamak için", `${prefix}log kanal [kanalid]`)
    .addField("Sıfırlamak için", `${prefix}log sıfırla`)
    .setColor("RANDOM")
    message.channel.send(aç)
  }
  
    if(args[0] === "kapat"){
          db.set(`logak_${message.guild.id}`, "kapalı")
    const kapat = new Discord.MessageEmbed()
    .setTitle("YesBan LOG")
    .addField("Başarılı", `Log kapatıldı`)
    .setColor("RANDOM")
    message.channel.send(kapat)
    }
  

  if(args[0] === "sıfırla"){
    db.delete(`logak_${message.guild.id}`)
    db.delete(`mesajedit_${message.guild.id}`)
    db.delete(`logkanalid_${message.guild.id}`)
    db.delete(`üyeedit_${message.guild.id}`)
    db.delete(`kanaledit_${message.guild.id}`)
    db.delete(`roledit_${message.guild.id}`)
        const sıfırlandı = new Discord.MessageEmbed()
    .setTitle("YesBan LOG")
    .addField("Başarılı", `Log sıfırlandı`)
    .setColor("RANDOM")
    message.channel.send(sıfırlandı)
  }


  if(args[0] === "kanal"){

    const argsyok3 = new Discord.MessageEmbed()
    .setTitle("YesBan LOG")
    .addField("HATA", `kanalı etiketlemelisin`)
    .addField("Doğru kullanım", `${prefix}log kanal [kanalid]`)
                    .setColor("RANDOM")
    if(!args[1]) return message.channel.send(argsyok3).then(msg => msg.delete(10000));          

    db.set(`logkanalid_${message.guild.id}`, args[1])
    const kanalayarlandı = new Discord.MessageEmbed()
        .setTitle("YesBan LOG")
    .addField("Başarılı", `Log kanalı ayarlandı`)
    .addField("Log açmak için", `${prefix}log aç/kapat`)
    .addField("Sıfırlamak için", `${prefix}log sıfırla`)
    .setColor("RANDOM")
    message.channel.send(kanalayarlandı)
  }


  if(args[0] === "özellik"){

    const argsyok4 = new Discord.MessageEmbed()
    .setTitle("YesBan LOG")
    .addField("HATA", `Yanlış kullanım`)
    .addField("Doğru kullanım", `${prefix}log özellik [mesaj/kanal/rol/üye] [aç/kapat]`)
                    .setColor("RANDOM")
    if(!args[1]) return message.channel.send(argsyok4).then(msg => msg.delete(10000));          

    
      if(args[1] === "mesaj"){
        
            const argsyok5 = new Discord.MessageEmbed()
    .setTitle("YesBan LOG")
    .addField("HATA", `Yanlış kullanım`)
    .addField("Doğru kullanım", `${prefix}log özellik mesaj aç/kapat`)
                            .setColor("RANDOM")
    if(!args[2]) return message.channel.send(argsyok5).then(msg => msg.delete(10000));       
        
              if(args[2] === "aç"){
            db.set(`mesajedit_${message.guild.id}`, "açık")
                const mesajaç = new Discord.MessageEmbed()
                .setTitle("YesBan LOG")
                .addField("Başarılı", `Mesaj log özellikleri açıldı`)
                .addField("Sıfırlamak için", `${prefix}log sıfırla`)
                .addField("Kanal ayarlamak için", `${prefix}log kanal [kanalid]`)
                .setColor("RANDOM")
                message.channel.send(mesajaç)
              }
              if(args[2] === "kapat"){
                db.set(`mesajedit_${message.guild.id}`, "kapalı")
                const mesajkapa = new Discord.MessageEmbed()
                .setTitle("YesBan LOG")
                .addField("Başarısız", `Mesaj log özellikleri açılmadı`)
                .setColor("RANDOM")
                message.channel.send(mesajkapa)
              }
      }
    
          if(args[1] === "kanal"){
        
            const argsyok6 = new Discord.MessageEmbed()
    .setTitle("YesBan LOG")
    .addField("HATA", `Yanlış kullanım`)
    .addField("Doğru kullanım", `${prefix}log özellik kanal aç/kapat`)
    if(!args[2]) return message.channel.send(argsyok6).then(msg => msg.delete(10000));       
        
              if(args[2] === "aç"){
            db.set(`kanaledit_${message.guild.id}`, "açık")
                const kanalaç = new Discord.MessageEmbed()
                .setTitle("YesBan LOG")
                .addField("Başarılı", `Kanal log özellikleri açıldı`)
                .addField("Sıfırlamak için", `${prefix}log sıfırla`)
                .addField("Kanal ayarlamak için", `${prefix}log kanal [kanalid]`)
                .setColor("RANDOM")
                message.channel.send(kanalaç)
              }
              if(args[2] === "kapat"){
                db.set(`kanaledit_${message.guild.id}`, "kapalı")
                const kanalkapa = new Discord.MessageEmbed()
                .setTitle("YesBan LOG")
                .addField("Başarısız", `Kanal log özellikleri açılmadı`)
                .setColor("RANDOM")
                message.channel.send(kanalkapa)
              }
      }
    
    
                  if(args[1] === "rol"){
        
            const argsyok8 = new Discord.MessageEmbed()
    .setTitle("YesBan LOG")
    .addField("HATA", `Yanlış kullanım`)
    .addField("Doğru kullanım", `${prefix}log özellik rol aç/kapat`)
                            .setColor("RANDOM")
    if(!args[2]) return message.channel.send(argsyok8).then(msg => msg.delete(10000));       
        
              if(args[2] === "aç"){
            db.set(`roledit_${message.guild.id}`, "açık")
                const rolaç = new Discord.MessageEmbed()
                .setTitle("YesBan LOG")
                .addField("Başarılı", `Rol log özellikleri açıldı`)
                .addField("Sıfırlamak için", `${prefix}log sıfırla`)
                .addField("Kanal ayarlamak için", `${prefix}log kanal [kanalid]`)
                .setColor("RANDOM")
                message.channel.send(rolaç)
              }
              if(args[2] === "kapat"){
                db.set(`roledit_${message.guild.id}`, "kapalı")
                const rolkapa = new Discord.MessageEmbed()
                .setTitle("YesBan LOG")
                .addField("Başarısız", `Rol log özellikleri açılmadı`)
                .setColor("RANDOM")
                message.channel.send(rolkapa)
              }
      }
    
                      if(args[1] === "üye"){
        
            const argsyok8 = new Discord.MessageEmbed()
    .setTitle("YesBan LOG")
    .addField("HATA", `Yanlış kullanım`)
    .addField("Doğru kullanım", `${prefix}log özellik üye aç/kapat`)
                            .setColor("RANDOM")
    if(!args[2]) return message.channel.send(argsyok8).then(msg => msg.delete(10000));       
        
              if(args[2] === "aç"){
            db.set(`üyeedit_${message.guild.id}`, "açık")
                const rolaç = new Discord.MessageEmbed()
                .setTitle("YesBan LOG")
                .addField("Başarılı", `Üye log özellikleri açıldı`)
                .addField("Sıfırlamak için", `${prefix}log sıfırla`)
                .addField("Kanal ayarlamak için", `${prefix}log kanal [kanalid]`)
                .setColor("RANDOM")
                message.channel.send(rolaç)
              }
              if(args[2] === "kapat"){
                db.set(`üyeedit_${message.guild.id}`, "kapalı")
                const rolkapa = new Discord.MessageEmbed()
                .setTitle("YesBan LOG")
                .addField("Başarısız", `Üye log özellikleri açılmadı`)
                .setColor("RANDOM")
                message.channel.send(rolkapa)
              }
      }
  }
}
  
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'log',
  description: 'log',
  usage: 'log'
};