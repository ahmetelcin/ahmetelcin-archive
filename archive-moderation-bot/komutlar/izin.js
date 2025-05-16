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
    const argsyk = new Discord.MessageEmbed()
    .setTitle(`${ayarlar.moderasyon_title}`)
    .addField("HATA", `Yanlış Kullanım!`)
    .addField("Rol izni vermek için", `${prefix}izin [ekle/kaldır] rol [mute/ban/kick/rol/sil] [@rol]`)
    .addField("Kullanıcı izni vermek için", `${prefix}izin [ekle/kaldır] kullanıcı [mute/ban/kick/rol/sil] [@kullanıcı]`)
    .addField("İzin verilenleri görmek için", `${prefix}izin durum [@kullanıcı/@rol]`)
    .addField("Sıfırlamak için", `${prefix}sıfırla izinler`)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send(argsyk)
  }else if(args[0] === "ekle"){
    if(!args[1]){
      const ekleargsyk = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("HATA", `Yanlış Kullanım!`)
      .addField("Rol izni vermek için", `${prefix}izin ekle rol [mute/ban/kick/rol/sil] [@rol]`)
      .addField("Kullanıcı izni vermek için", `${prefix}izin ekle kullanıcı [mute/ban/kick/rol/sil] [@kullanıcı]`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(ekleargsyk)
    }else if(args[1] === "rol"){
      if(!args[2]){
        const rolargsyk = new Discord.MessageEmbed()
        .setTitle(`${ayarlar.moderasyon_title}`)
        .addField("HATA", `Hangi komut için izin vermek istediğini seçmedin!`)
        .addField("Rol izni vermek için", `${prefix}izin ekle rol [mute/ban/kick/rol/sil] [@rol]`)
        .setFooter(ayarlar.ayarlar_footer)
        .setColor(ayarlar.renk)
        message.channel.send(rolargsyk)
      }else if(args[2] === "mute"){
        if(!rol){
          const rolyk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("HATA", `İzin verilcek rolü taglemedin`)
          .addField("Rol izni vermek için", `${prefix}izin ekle rol mute [@rol]`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(rolyk)
        }else{
          const rolyk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("Role izin verildi", `${rol} rolüne mute izni verildi`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(rolyk)
          modlog.set(`rolizinmute_${message.guild.id}_${rol.id}`, "Açık")
        }
      }else if(args[2] === "ban"){
        if(!rol){
          const rolyk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("HATA", `İzin verilcek rolü taglemedin`)
          .addField("Rol izni vermek için", `${prefix}izin ekle rol ban [@rol]`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(rolyk)
        }else{
          const rolyk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("Role izin verildi", `${rol} rolüne ban izni verildi`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(rolyk)
          modlog.set(`rolizinban_${message.guild.id}_${rol.id}`, "Açık")
        }
      }else if(args[2] === "kick"){
        if(!rol){
          const rolyk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("HATA", `İzin verilcek rolü taglemedin`)
          .addField("Rol izni vermek için", `${prefix}izin ekle rol kick [@rol]`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(rolyk)
        }else{
          const rolyk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("Role izin verildi", `${rol} rolüne kick izni verildi`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(rolyk)
          modlog.set(`rolizinkick_${message.guild.id}_${rol.id}`, "Açık")
        }
      }else if(args[2] === "rol"){
        if(!rol){
          const rolyk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("HATA", `İzin verilcek rolü taglemedin`)
          .addField("Rol izni vermek için", `${prefix}izin ekle rol rol [@rol]`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(rolyk)
        }else{
          const rolyk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("Role izin verildi", `${rol} rolüne rol izni verildi`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(rolyk)
          modlog.set(`rolizinrol_${message.guild.id}_${rol.id}`, "Açık")
        }
      }else if(args[2] === "sil"){
        if(!rol){
          const rolyk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("HATA", `İzin verilcek rolü taglemedin`)
          .addField("Rol izni vermek için", `${prefix}izin ekle rol sil [@rol]`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(rolyk)
        }else{
          const rolyk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("Role izin verildi", `${rol} rolüne silme izni verildi`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(rolyk)
          modlog.set(`rolizinsil_${message.guild.id}_${rol.id}`, "Açık")
        }
      }
    }else if(args[1] === "kullanıcı"){
      if(!args[2]){
        const rolargsyk = new Discord.MessageEmbed()
        .setTitle(`${ayarlar.moderasyon_title}`)
        .addField("HATA", `İzin verilecek komut türünü seçmedin`)
        .addField("Rol izni vermek için", `${prefix}izin ekle kullanıcı [mute/ban/kick/rol/sil] [@kullanıcı]`)
        .setFooter(ayarlar.ayarlar_footer)
        .setColor(ayarlar.renk)
        message.channel.send(rolargsyk)
      }else if(args[2] === "mute"){
        if(!user){
          const useryk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("HATA", `İzin verilcek kullanıcıyı taglemedin`)
          .addField("Rol izni vermek için", `${prefix}izin ekle kullanıcı mute [@kullanıcı]`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(useryk)
        }else{
          const uservr = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("Kullanıcıya izin verildi", `${user} şahsına mute izni verildi`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(uservr)
          modlog.set(`userizinmute_${message.guild.id}_${user.id}`, "Açık")
        }
      }else if(args[2] === "ban"){
        if(!user){
          const useryk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("HATA", `İzin verilcek kullanıcıyı taglemedin`)
          .addField("Rol izni vermek için", `${prefix}izin ekle kullanıcı ban [@kullanıcı]`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(useryk)
        }else{
          const uservr = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("Kullanıcıya izin verildi", `${user} şahsına ban izni verildi`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(uservr)
          modlog.set(`userizinban_${message.guild.id}_${user.id}`, "Açık")
      }
    }else if(args[2] === "kick"){
        if(!user){
          const useryk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("HATA", `İzin verilcek kullanıcıyı taglemedin`)
          .addField("Rol izni vermek için", `${prefix}izin ekle kullanıcı kick [@kullanıcı]`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(useryk)
        }else{
          const uservr = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("Kullanıcıya izin verildi", `${user} şahsına kick izni verildi`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(uservr)
          modlog.set(`userizinkick_${message.guild.id}_${user.id}`, "Açık")
    }
  }else if(args[2] === "rol"){
        if(!user){
          const useryk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("HATA", `İzin verilcek kullanıcıyı taglemedin`)
          .addField("Rol izni vermek için", `${prefix}izin ekle kullanıcı rol [@kullanıcı]`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(useryk)
        }else{
          const uservr = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("Kullanıcıya izin verildi", `${user} şahsına rol izni verildi`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(uservr)
          modlog.set(`userizinrol_${message.guild.id}_${user.id}`, "Açık")
    }
  }else if(args[2] === "sil"){
        if(!user){
          const useryk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("HATA", `İzin verilcek kullanıcıyı taglemedin`)
          .addField("Rol izni vermek için", `${prefix}izin ekle kullanıcı sil [@kullanıcı]`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(useryk)
        }else{
          const uservr = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("Kullanıcıya izin verildi", `${user} şahsına silme izni verildi`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(uservr)
          modlog.set(`userizinsil_${message.guild.id}_${user.id}`, "Açık")
    }
  }
  }
}else if(args[0] === "kaldır"){
    if(!args[1]){
      const ekleargsyk = new Discord.MessageEmbed()
      .setTitle(`${ayarlar.moderasyon_title}`)
      .addField("HATA", `Yanlış Kullanım!`)
      .addField("Rol izni kaldırmak için", `${prefix}izin kaldır rol [mute/ban/kick/rol/sil] [@rol]`)
      .addField("Kullanıcı izni kaldırmak için", `${prefix}izin kaldır kullanıcı [mute/ban/kick/rol/sil] [@kullanıcı]`)
      .setFooter(ayarlar.ayarlar_footer)
      .setColor(ayarlar.renk)
      message.channel.send(ekleargsyk)
    }else if(args[1] === "rol"){
      if(!args[2]){
        const rolargsyk = new Discord.MessageEmbed()
        .setTitle(`${ayarlar.moderasyon_title}`)
        .addField("HATA", `Yanlış Kullanım!`)
        .addField("Rol izni vermek için", `${prefix}izin kaldır rol [mute/ban/kick/rol/sil] [@rol]`)
        .setFooter(ayarlar.ayarlar_footer)
        .setColor(ayarlar.renk)
        message.channel.send(rolargsyk)
      }else if(args[2] === "mute"){
        if(!rol){
          const rolyk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("HATA", `İzin kaldırılacak rolü taglemedin`)
          .addField("Rol izni vermek için", `${prefix}izin kaldır rol mute [@rol]`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(rolyk)
        }else{
          const rolyk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("Role izin kaldırıldı", `${rol} rolüne mute izni kaldırıldı`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(rolyk)
          modlog.set(`rolizinmute_${message.guild.id}_${rol.id}`, "Kapalı")
        }
      }else if(args[2] === "ban"){
        if(!rol){
          const rolyk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("HATA", `İzin kaldırılacak rolü taglemedin`)
          .addField("Rol izni kaldırmak için", `${prefix}izin kaldır rol ban [@rol]`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(rolyk)
        }else{
          const rolyk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("Role izin kaldırıldı", `${rol} rolüne ban izni kaldırıldı`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(rolyk)
          modlog.set(`rolizinban_${message.guild.id}_${rol.id}`, "Kapalı")
        }
      }else if(args[2] === "kick"){
        if(!rol){
          const rolyk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("HATA", `İzin kaldırılacak rolü taglemedin`)
          .addField("Rol izni kaldırmak için", `${prefix}izin kaldır rol kick [@rol]`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(rolyk)
        }else{
          const rolyk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("Role izin kaldırıldı", `${rol} rolüne kick izni kaldırıldı`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(rolyk)
          modlog.set(`rolizinkick_${message.guild.id}_${rol.id}`, "Kapalı")
        }
      }else if(args[2] === "rol"){
        if(!rol){
          const rolyk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("HATA", `İzin kaldırılıcak rolü taglemedin`)
          .addField("Rol izni kaldırmak için", `${prefix}izin kaldır rol rol [@rol]`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(rolyk)
        }else{
          const rolyk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("Role izin kaldırıldı", `${rol} rolüne rol izni kaldırıldı`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(rolyk)
          modlog.set(`rolizinrol_${message.guild.id}_${rol.id}`, "Kapalı")
        }
      }else if(args[2] === "sil"){
        if(!rol){
          const rolyk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("HATA", `İzin kaldırılcak rolü taglemedin`)
          .addField("Rol izni kaldırmak için", `${prefix}izin kaldır rol sil [@rol]`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(rolyk)
        }else{
          const rolyk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("Role izin kaldırıldı", `${rol} rolüne silme izni kaldırıldı`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(rolyk)
          modlog.set(`rolizinsil_${message.guild.id}_${rol.id}`, "Kapalı")
        }
      }
    }else if(args[1] === "kullanıcı"){
      if(!args[2]){
        const rolargsyk = new Discord.MessageEmbed()
        .setTitle(`${ayarlar.moderasyon_title}`)
        .addField("HATA", `İzin kaldırılıcak komut türünü seçmedin`)
        .addField("Rol izni kaldırmak için", `${prefix}izin kaldır kullanıcı [mute/ban/kick/rol/sil] [@kullanıcı]`)
        .setFooter(ayarlar.ayarlar_footer)
        .setColor(ayarlar.renk)
        message.channel.send(rolargsyk)
      }else if(args[2] === "mute"){
        if(!user){
          const useryk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("HATA", `İzin kaldırılıcak kullanıcıyı taglemedin`)
          .addField("Rol izni kaldırmak için", `${prefix}izin kaldır kullanıcı mute [@kullanıcı]`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(useryk)
        }else{
          const uservr = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("Kullanıcıya izin kaldırıldı", `${user} şahsına mute izni kaldırıldı`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(uservr)
          modlog.set(`userizinmute_${message.guild.id}_${user.id}`, "Kapalı")
        }
      }else if(args[2] === "ban"){
        if(!user){
          const useryk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("HATA", `İzin kaldırılıcak kullanıcıyı taglemedin`)
          .addField("Rol izni kaldırmak için", `${prefix}izin kaldır kullanıcı ban [@kullanıcı]`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(useryk)
        }else{
          const uservr = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("Kullanıcıya izin kaldırıldı", `${user} şahsına ban izni kaldırıldı`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(uservr)
          modlog.set(`userizinban_${message.guild.id}_${user.id}`, "Kapalı")
      }
    }else if(args[2] === "kick"){
        if(!user){
          const useryk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("HATA", `İzin kaldırılcak kullanıcıyı taglemedin`)
          .addField("Rol izni kaldırmak için", `${prefix}izin kaldır kullanıcı kick [@kullanıcı]`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(useryk)
        }else{
          const uservr = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("Kullanıcıya izin kaldırıldı", `${user} şahsına kick izni kaldırıldı`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(uservr)
          modlog.set(`userizinkick_${message.guild.id}_${user.id}`, "Kapalı")
    }
  }else if(args[2] === "rol"){
        if(!user){
          const useryk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("HATA", `İzin kaldırılıcak kullanıcıyı taglemedin`)
          .addField("Rol izni kaldırmak için", `${prefix}izin kaldır kullanıcı rol [@kullanıcı]`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(useryk)
        }else{
          const uservr = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("Kullanıcıya izin kaldırıldı", `${user} şahsına rol izni kaldırıldı`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(uservr)
          modlog.set(`userizinrol_${message.guild.id}_${user.id}`, "Kapalı")
    }
  }else if(args[2] === "sil"){
        if(!user){
          const useryk = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("HATA", `İzin kaldırılıcak kullanıcıyı taglemedin`)
          .addField("Rol izni kaldırmak için", `${prefix}izin kaldır kullanıcı sil [@kullanıcı]`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(useryk)
        }else{
          const uservr = new Discord.MessageEmbed()
          .setTitle(`${ayarlar.moderasyon_title}`)
          .addField("Kullanıcıya izin kaldırıldı", `${user} şahsına silme izni kaldırıldı`)
          .setFooter(ayarlar.ayarlar_footer)
          .setColor(ayarlar.renk)
          message.channel.send(uservr)
          modlog.set(`userizinsil_${message.guild.id}_${user.id}`, "Kapalı")
    }
  }
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
  name: 'izin',//buraya komutun adını yaz.
  description: 'izin',//burda komutun açıklamasını yazıyoruz.
  usage: 'izin'//buraya komut nasıl kullanılır onu yazdım.d! yerine istediğin prefixi yaz.
}