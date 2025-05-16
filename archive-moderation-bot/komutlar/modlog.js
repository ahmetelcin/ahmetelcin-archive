const Discord = require('discord.js')
const db = require('quick.db')
var modlog = new db.table('modlog')
var ekonomi = new db.table('ekonomi')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
  let user = message.mentions.users.first();
  let kanal = message.mentions.channels.first()
  
  let modkanal = modlog.get(`modlog_kanal_${message.guild.id}`) || "yok"
  let modak = modlog.get(`modlog_ban_${message.guild.id}`) || "açık"
  let kickak = modlog.get(`modlog_kick_${message.guild.id}`) || "açık"
  let muteak = modlog.get(`modlog_mute_${message.guild.id}`) || "açık"
  let rolverak = modlog.get(`modlog_rolver_${message.guild.id}`) || "açık"
  let rolalak = modlog.get(`modlog_rolal_${message.guild.id}`) || "açık"

  if(!message.member.hasPermission("ADMINISTRATOR")){
    const yetkiyk = new Discord.MessageEmbed()
    .setTitle(`${ayarlar.moderasyon_title}`)
    .addField("HATA", `Bu komutu kullanmak için \`YÖNETİCİ\` yetkin olmalı`)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send(yetkiyk)
  }else if(!args[0]){
    const argsyk = new Discord.MessageEmbed()
    .setTitle(`${ayarlar.moderasyon_title}`)
    .addField("HATA", `Yanlış kullanım!`)
    .addField("Kanal belirlemek için", `${prefix}modlog ayarla [#kanal]`)
    .addField("Komutların modlogunu açmak ya da kapatmak için", `${prefix}modlog [aç/kapat] [ban/kick/mute/rolver/rolal]`)
    .addField("Durum için", `${prefix}durum modlog`)
    .addField("Sıfırlamak için", `${prefix}sıfırla modlog [kanal/ak/hepsi]`)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send(argsyk)
  }else if(args[0] === "ayarla"){
    if(!kanal){
      const kanalyk = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("HATA", `Bu komutu kullanmak için bir \`KANAL\` etiketlemelisin`)
      .addField("Doğru kullanım", `${prefix}modlog ayarla [#kanal]`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(kanalyk)
    }else{
      const modlogayarla = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("Başarılı", `Modlog kanalı ${kanal} olarak ayarlandı`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(modlogayarla)
      modlog.set(`modlog_kanal_${message.guild.id}`, kanal.id)
    }
  }else if(args[0] === "aç"){
    if(!args[1]){
      const açargsyk = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("HATA", `Yanlış kullanım!`)
      .addField("Doğru kullanım", `${prefix}modlog aç [ban/kick/mute/rolver/rolal]`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(açargsyk)
    }else if(args[1] === "ban"){
      const banaç = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("Başarılı", `\`BAN\` modlogu açıldı`)
      .addField("Modlog kanalı", `<#${modkanal}>`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(banaç)
      modlog.set(`modlog_ban_${message.guild.id}`, "açık")
    }else if(args[1] === "kick"){
      const kickaç = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("Başarılı", `\`KİCK\` modlogu açıldı`)
      .addField("Modlog kanalı", `<#${modkanal}>`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(kickaç)
      modlog.set(`modlog_kick_${message.guild.id}`, "açık")
    }else if(args[1] === "mute"){
      const muteaç = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("Başarılı", `\`MUTE\` modlogu açıldı`)
      .addField("Modlog kanalı", `<#${modkanal}>`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(muteaç)
      modlog.set(`modlog_mute_${message.guild.id}`, "açık")
    }else if(args[1] === "rolver"){
      const rolveraç = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("Başarılı", `\`ROL VER\` modlogu açıldı`)
      .addField("Modlog kanalı", `<#${modkanal}>`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(rolveraç)
      modlog.set(`modlog_rolver_${message.guild.id}`, "açık")
    }else if(args[1] === "rolal"){
      const rolalaç = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("Başarılı", `\`ROL AL\` modlogu açıldı`)
      .addField("Modlog kanalı", `<#${modkanal}>`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(rolalaç)
      modlog.set(`modlog_rolal_${message.guild.id}`, "açık")
    }
  }else if(args[0] === "kapat"){
    if(!args[1]){
      const açargsyk = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("HATA", `Yanlış kullanım!`)
      .addField("Doğru kullanım", `${prefix}modlog kapat [ban/kick/mute/rolver/rolal]`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(açargsyk)
    }else if(args[1] === "ban"){
      const bankapa = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("Başarılı", `\`BAN\` modlogu kapandı`)
      .addField("Modlog kanalı", `<#${modkanal}>`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(bankapa)
      modlog.set(`modlog_ban_${message.guild.id}`, "kapalı")
    }else if(args[1] === "kick"){
      const kickkapa = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("Başarılı", `\`KİCK\` modlogu kapandı`)
      .addField("Modlog kanalı", `<#${modkanal}>`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(kickkapa)
      modlog.set(`modlog_kick_${message.guild.id}`, "kapalı")
    }else if(args[1] === "mute"){
      const mutekapa = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("Başarılı", `\`MUTE\` modlogu kapandı`)
      .addField("Modlog kanalı", `<#${modkanal}>`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(mutekapa)
      modlog.set(`modlog_mute_${message.guild.id}`, "kapalı")
    }else if(args[1] === "rolver"){
      const rolverkapa = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("Başarılı", `\`ROL VER\` modlogu kapandı`)
      .addField("Modlog kanalı", `<#${modkanal}>`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(rolverkapa)
      modlog.set(`modlog_rolver_${message.guild.id}`, "kapalı")
    }else if(args[1] === "rolal"){
      const rolalkapa = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("Başarılı", `\`ROL AL\` modlogu kapandı`)
      .addField("Modlog kanalı", `<#${modkanal}>`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(rolalkapa)
      modlog.set(`modlog_rolal_${message.guild.id}`, "kapalı")
    }}
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
  name: 'modlog',//buraya komutun adını yaz.
  description: 'modlog',//burda komutun açıklamasını yazıyoruz.
  usage: 'modlog'//buraya komut nasıl kullanılır onu yazdım.d! yerine istediğin prefixi yaz.
}