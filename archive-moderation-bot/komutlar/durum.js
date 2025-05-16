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

  if(!message.member.hasPermission("ADMINISTRATOR")){
    const yetkiyk = new Discord.MessageEmbed()
    .setTitle(`${ayarlar.moderasyon_title}`)
    .addField("HATA", `Bu komutu kullanmak için \`YÖNETİCİ\` yetkin olmalı`)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send(yetkiyk)
  }else if(!args[0]){
    const welkam = new Discord.MessageEmbed()
    .setTitle(ayarlar.moderasyon_title)
    .addField("HATA", `Yanlış Kullanım!`)
    .addField("Modlog durumuna bakmak için", `${prefix}durum modlog`)
    .addField("İzinlere bakmak için", `${prefix}durum izin [@kullanıcı/@rol]`)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send(welkam)
  }else if(args[0] === "modlog"){
    
    let modkanal = modlog.get(`modlog_kanal_${message.guild.id}`) || "yok"
    let modak = modlog.get(`modlog_ban_${message.guild.id}`) || "açık"
    let kickak = modlog.get(`modlog_kick_${message.guild.id}`) || "açık"
    let muteak = modlog.get(`modlog_mute_${message.guild.id}`) || "açık"
    let rolverak = modlog.get(`modlog_rolver_${message.guild.id}`) || "açık"
    let rolalak = modlog.get(`modlog_rolal_${message.guild.id}`) || "açık"
    
    const durum = new Discord.MessageEmbed()
    .setTitle(`${ayarlar.moderasyon_title}`)
    .addField("Durum", `AYARLAR >>> \n`)
    .addField("Kanal", `<#${modkanal}> \n`)
    .addField("Açık/Kapalı", `**Ban:** ${modak} \n**Kick:** ${kickak} \n**Mute:** ${muteak} \n**Rol ver:** ${rolverak} \n**Rol al:** ${rolalak}`)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send(durum)
  }else if(args[0] === "izin"){
    if(!rol){}else{
      const rolvr = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("Durum", `${rol} adlı rolün izinleri >>> \n`)
      .addField("Hukuki işlemler", `**Mute:** ${modlog.get(`rolizinmute_${message.guild.id}_${rol.id}`) || "yok"} \n**Ban:** ${modlog.get(`rolizinban_${message.guild.id}_${rol.id}`) || "yok"} \n**Kick:** ${modlog.get(`rolizinkick_${message.guild.id}_${rol.id}`) || "yok"} \n**Rol:** ${modlog.get(`rolizinrol_${message.guild.id}_${rol.id}`) || "yok"} \n**Sil:** ${modlog.get(`rolizinsil_${message.guild.id}_${rol.id}`) || "yok"}`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(rolvr)
    }    
    if(!user){}else{
      const rolvr = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("Durum", `${user} adlı kullanıcının izinleri >>> \n`)
      .addField("Hukuki işlemler", `**Mute:** ${modlog.get(`userizinmute_${message.guild.id}_${user.id}`) || "yok"} \n**Ban:** ${modlog.get(`userizinban_${message.guild.id}_${user.id}`) || "yok"} \n**Kick:** ${modlog.get(`userizinkick_${message.guild.id}_${user.id}`) || "yok"} \n**Rol:** ${modlog.get(`userizinrol_${message.guild.id}_${user.id}`) || "yok"} \n**Sil:** ${modlog.get(`userizinsil_${message.guild.id}_${user.id}`) || "yok"}`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(rolvr)
    }
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
  name: 'durum',//buraya komutun adını yaz.
  description: 'durum',//burda komutun açıklamasını yazıyoruz.
  usage: 'durum'//buraya komut nasıl kullanılır onu yazdım.d! yerine istediğin prefixi yaz.
}
