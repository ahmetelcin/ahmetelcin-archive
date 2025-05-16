const Discord = require('discord.js')
const db = require('quick.db')
var modlog = new db.table('modlog')
var ekonomi = new db.table('ekonomi')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
  let user = args[0]
  let kanal = message.mentions.channels.first()
  let rol = message.mentions.roles.first()   
  
  let modkanalid = modlog.get(`modlog_kanal_${message.guild.id}`) || "yok"
  let modkanal = message.channel.guild.channels.cache.get(modkanalid)
  
  if(modlog.get(`userizinban_${message.guild.id}_${message.author.id}`) === "Açık"){
   if(!user){
    const useryk = new Discord.MessageEmbed()
    .setTitle(`${ayarlar.moderasyon_title}`)
    .addField("HATA", `Bir kullanıcıyı etiketleki banını kaldıralım!`)
    .addField("Doğru kullanım", `${prefix}unban [kullanıcı id]`)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send(useryk)
  }else if(user.id === message.author.id){
    const usersen = new Discord.MessageEmbed()
    .setTitle(`${ayarlar.moderasyon_title}`)
    .addField("HATA", `Banlı olsaydın burda olmazdın :D`)
    .addField("Doğru kullanım", `${prefix}unban [kullanıcı id]`)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send(usersen)
  }else{
    message.guild.members.unban(user);     
    let sebep = modlog.get(`bansebep_${message.guild.id}_${user.id}`)
    
    let modak = modlog.get(`modlog_ban_${message.guild.id}`) || "açık"
    
    if(modak === "Kapalı"){
      const banlandı = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("GG", `${user} şahsiyeti ${message.author} tarafından banı kaldırıldı`)
      .addField("Sebep", `${sebep}`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(banlandı)
    }else{
      if(modkanal !== "yok"){
        const banlandı = new Discord.MessageEmbed()
        .setTitle(`${ayarlar.moderasyon_title}`)
        .addField("GG", `${user} şahsiyeti ${message.author} tarafından banı kaldırıldı`)
        .addField("Sebep", `${sebep}`)
        .setFooter(ayarlar.ayarlar_footer)
        .setColor(ayarlar.renk)
        modkanal.channel.send(banlandı)
      }else{
        const banlandı = new Discord.MessageEmbed()
        .setTitle(`${ayarlar.moderasyon_title}`)
        .addField("GG", `${user} şahsiyeti ${message.author} tarafından banı kaldırıldı`)
        .addField("Sebep", `${sebep}`)
        .setFooter(ayarlar.ayarlar_footer)
        .setColor(ayarlar.renk)
        message.channel.send(banlandı)
      }
    }
  }
  }else if(!message.member.hasPermission("ADMINISTRATOR")){
    if(!user){
    const useryk = new Discord.MessageEmbed()
    .setTitle(`${ayarlar.moderasyon_title}`)
    .addField("HATA", `Bir kullanıcıyı etiketleki banını kaldıralım!`)
    .addField("Doğru kullanım", `${prefix}unban [kullanıcı id]`)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send(useryk)
  }else if(user.id === message.author.id){
    const usersen = new Discord.MessageEmbed()
    .setTitle(`${ayarlar.moderasyon_title}`)
    .addField("HATA", `Banlı olsaydın burda olmazdın :D`)
    .addField("Doğru kullanım", `${prefix}unban [kullanıcı id]`)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send(usersen)
  }else{
    message.guild.members.unban(user);     
    let sebep = modlog.get(`bansebep_${message.guild.id}_${user.id}`)  
    
    let modak = modlog.get(`modlog_ban_${message.guild.id}`) || "açık"
    
    if(modak === "Kapalı"){
      const banlandı = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("GG", `${user} şahsiyeti ${message.author} tarafından banı kaldırıldı`)
      .addField("Sebep", `${sebep}`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(banlandı)
    }else{
      if(modkanal !== "yok"){
        const banlandı = new Discord.MessageEmbed()
        .setTitle(`${ayarlar.moderasyon_title}`)
        .addField("GG", `${user} şahsiyeti ${message.author} tarafından banı kaldırıldı`)
        .addField("Sebep", `${sebep}`)
        .setFooter(ayarlar.ayarlar_footer)
        .setColor(ayarlar.renk)
        modkanal.channel.send(banlandı)
      }else{
        const banlandı = new Discord.MessageEmbed()
        .setTitle(`${ayarlar.moderasyon_title}`)
        .addField("GG", `${user} şahsiyeti ${message.author} tarafından banı kaldırıldı`)
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
    .addField("HATA", `Bir kullanıcıyı etiketleki banını kaldıralım!`)
    .addField("Doğru kullanım", `${prefix}unban [kullanıcı id]`)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send(useryk)
  }else if(user.id === message.author.id){
    const usersen = new Discord.MessageEmbed()
    .setTitle(`${ayarlar.moderasyon_title}`)
    .addField("HATA", `Banlı olsaydın burda olmazdın :D`)
    .addField("Doğru kullanım", `${prefix}unban [kullanıcı id]`)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send(usersen)
  }else{
    message.guild.members.unban(user);     
    let sebep = modlog.get(`bansebep_${message.guild.id}_${user.id}`)  
    
    let modak = modlog.get(`modlog_ban_${message.guild.id}`) || "açık"
    
    if(modak === "Kapalı"){
      const banlandı = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("GG", `${user} şahsiyeti ${message.author} tarafından banı kaldırıldı`)
      .addField("Sebep", `${sebep}`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(banlandı)
    }else{
      if(modkanal !== "yok"){
        const banlandı = new Discord.MessageEmbed()
        .setTitle(`${ayarlar.moderasyon_title}`)
        .addField("GG", `${user} şahsiyeti ${message.author} tarafından banı kaldırıldı`)
        .addField("Sebep", `${sebep}`)
        .setFooter(ayarlar.ayarlar_footer)
        .setColor(ayarlar.renk)
        modkanal.channel.send(banlandı)
      }else{
        const banlandı = new Discord.MessageEmbed()
        .setTitle(`${ayarlar.moderasyon_title}`)
        .addField("GG", `${user} şahsiyeti ${message.author} tarafından banı kaldırıldı`)
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
        .addField("Merhaba", `Kankam senin yetkin yok sanırım gidip`)
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
  name: 'unban',//buraya komutun adını yaz.
  description: 'unban',//burda komutun açıklamasını yazıyoruz.
  usage: 'unban'//buraya komut nasıl kullanılır onu yazdım.d! yerine istediğin prefixi yaz.
}
