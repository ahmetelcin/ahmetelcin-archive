const Discord = require('discord.js')
const db = require('quick.db')
var modlog = new db.table('modlog')
var ekonomi = new db.table('ekonomi')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
  let user = message.mentions.users.first();
  let kanal = message.mentions.channels.first()
  let rol = message.mentions.roles.first()      

  let modkanal = modlog.get(`modlog_kanal_${message.guild.id}`) || "yok"
  
  let sebep = args.slice(1).join("  ");
  if(modlog.get(`userizinban_${message.guild.id}_${message.author.id}`) === "Açık"){
    if(!user){
    const useryk = new Discord.MessageEmbed()
    .setTitle(`${ayarlar.moderasyon_title}`)
    .addField("HATA", `Bir kullancıyı etiketlemelisin!`)
    .addField("Doğru kullanım", `${prefix}kick [@kullanıcı] [sebep]`)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send(useryk)
  }else if(user.id === message.author.id){
    const usersen = new Discord.MessageEmbed()
    .setTitle(`${ayarlar.moderasyon_title}`)
    .addField("HATA", `Kendini banlayamazsın!`)
    .addField("Doğru kullanım", `${prefix}kick [@kullanıcı] [sebep]`)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send(usersen)
  }else if(!user.bannable){
    const banlıyamıom = new Discord.MessageEmbed()
    .setTitle(`${ayarlar.moderasyon_title}`)
    .addField("HATA", `Bu kullanıcıyı banlayacak yetkim yok!`)
    .addField("Doğru kullanım", `${prefix}kick [@kullanıcı] [sebep]`)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send(banlıyamıom)
  }else{
    if(sebep === ""){sebep = "Yok"}
    user.ban({ days: 7, reason: `${sebep}` })
    
    let modkanal = modlog.get(`modlog_kanal_${message.guild.id}`) || "yok"
    let modak = modlog.get(`modlog_ban_${message.guild.id}`) || "açık"
    
    if(modak !== "Kapalı"){
      const banlandı = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("GG", `${user} şahsiyeti ${message.author} tarafından kicklendi`)
      .addField("Sebep", `${sebep}`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      modkanal.send(banlandı)
    }else{     
      const banlandı = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("GG", `${user} şahsiyeti ${message.author} tarafından kicklendi`)
      .addField("Sebep", `${sebep}`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(banlandı)
    }
  }
  }else if(!message.member.hasPermission("ADMINISTRATOR")){
    if(!user){
    const useryk = new Discord.MessageEmbed()
    .setTitle(`${ayarlar.moderasyon_title}`)
    .addField("HATA", `Bir kullancıyı etiketlemelisin!`)
    .addField("Doğru kullanım", `${prefix}kick [@kullanıcı] [sebep]`)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send(useryk)
  }else if(user.id === message.author.id){
    const usersen = new Discord.MessageEmbed()
    .setTitle(`${ayarlar.moderasyon_title}`)
    .addField("HATA", `Kendini banlayamazsın!`)
    .addField("Doğru kullanım", `${prefix}kick [@kullanıcı] [sebep]`)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send(usersen)
  }else{
    if(sebep === ""){sebep = "Yok"}
    message.guild.members.ban(user, { days: 7 });     
    modlog.set(`bansebep_${message.guild.id}_${user.id}`, sebep)
    
    let modak = modlog.get(`modlog_ban_${message.guild.id}`) || "açık"
    
    if(modak === "Kapalı"){
      const banlandı = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("GG", `${user} şahsiyeti ${message.author} tarafından kicklendi`)
      .addField("Sebep", `${sebep}`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(banlandı)
    }else{
      if(modkanal !== "yok"){
        const banlandı = new Discord.MessageEmbed()
        .setTitle(`${ayarlar.moderasyon_title}`)
        .addField("GG", `${user} şahsiyeti ${message.author} tarafından kicklendi`)
        .addField("Sebep", `${sebep}`)
        .setFooter(ayarlar.ayarlar_footer)
        .setColor(ayarlar.renk)
        modkanal.send(banlandı)
      }else{
        const banlandı = new Discord.MessageEmbed()
        .setTitle(`${ayarlar.moderasyon_title}`)
        .addField("GG", `${user} şahsiyeti ${message.author} tarafından kicklendi`)
        .addField("Sebep", `${sebep}`)
        .setFooter(ayarlar.ayarlar_footer)
        .setColor(ayarlar.renk)
        message.channel.send(banlandı)
      }
    }
  }
}else if(modlog.get(`rolizinban_${message.guild.id}_${rol.id}`) === "Açık"){
    if(!user){
    const useryk = new Discord.MessageEmbed()
    .setTitle(`${ayarlar.moderasyon_title}`)
    .addField("HATA", `Bir kullancıyı etiketlemelisin!`)
    .addField("Doğru kullanım", `${prefix}kick [@kullanıcı] [sebep]`)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send(useryk)
  }else if(user.id === message.author.id){
    const usersen = new Discord.MessageEmbed()
    .setTitle(`${ayarlar.moderasyon_title}`)
    .addField("HATA", `Kendini banlayamazsın!`)
    .addField("Doğru kullanım", `${prefix}kick [@kullanıcı] [sebep]`)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send(usersen)
  }else{
    if(sebep === ""){sebep = "Yok"}
    message.guild.members.ban(user, { days: 7 });     
    modlog.set(`bansebep_${message.guild.id}_${user.id}`, sebep)
    
    let modak = modlog.get(`modlog_ban_${message.guild.id}`) || "açık"
    
    if(modak === "Kapalı"){
      const banlandı = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("GG", `${user} şahsiyeti ${message.author} tarafından kicklendi`)
      .addField("Sebep", `${sebep}`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(banlandı)
    }else{
      if(modkanal !== "yok"){
        const banlandı = new Discord.MessageEmbed()
        .setTitle(`${ayarlar.moderasyon_title}`)
        .addField("GG", `${user} şahsiyeti ${message.author} tarafından kicklendi`)
        .addField("Sebep", `${sebep}`)
        .setFooter(ayarlar.ayarlar_footer)
        .setColor(ayarlar.renk)
        modkanal.send(banlandı)
      }else{
        const banlandı = new Discord.MessageEmbed()
        .setTitle(`${ayarlar.moderasyon_title}`)
        .addField("GG", `${user} şahsiyeti ${message.author} tarafından kicklendi`)
        .addField("Sebep", `${sebep}`)
        .setFooter(ayarlar.ayarlar_footer)
        .setColor(ayarlar.renk)
        message.channel.send(banlandı)
      }
    }
  }
}else{
        const izinyk = new Discord.MessageEmbed()
        .setTitle(`${ayarlar.moderasyon_title}`)
        .addField("Merhaba", `Yetkiniz yok!`)
        .addField("İzin vermek için", `${prefix}izin`)
        .setFooter(ayarlar.ayarlar_footer)
        .setColor(ayarlar.renk)
        message.channel.send(izinyk)
}
}

exports.conf = {
 enabled: true,//komut kullanıma hazırmı evet demek
 guildOnly: false,//Komut özel dende kullanılabilirmi şuan hayır.
 aliases: [],//Komutun diğer adlarını yani diğer kullanılcak şeylerini giriyoz. 
 permLevel: 0,//komutun şuan herkesin kullanmasını sağladım server.js dede evelationda vardı. 
//1 = herkes kullanabilir.
//2 = sadece üyeleri banla yetkisi olan kullanabilir.
//3 = Yönetici yetkisi olanlar kullanabilir.
//4 = Sadece bot sahibi kullanabilir.  
}
exports.help = {
  name: 'kick',//buraya komutun adını yaz.
  description: 'kick',//burda komutun açıklamasını yazıyoruz.
  usage: 'kick'//buraya komut nasıl kullanılır onu yazdım.d! yerine istediğin prefixi yaz.
}
