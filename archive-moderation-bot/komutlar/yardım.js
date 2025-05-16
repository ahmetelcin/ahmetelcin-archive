const Discord = require('discord.js')//bir modülü tanımladık.herhangi bir modül tanımlanabilirdi.
const db = require('quick.db')
var modlog = new db.table('modlog')
var ekonomi = new db.table('ekonomi')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client(); //Creating discord.js client (constructor)
const disbut = require('discord-buttons');

exports.run = async (client, message, args) => {
  
  let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix
  let user = message.mentions.users.first();
  let kanal = message.mentions.channels.first()
  
    const ytlink = new disbut.MessageButton()
    .setLabel('Beni ekle')
    .setStyle("url")
    .setURL("https://discord.com/oauth2/authorize?client_id=757307420082176050&scope=bot&permissions=805829694")
    const geri = new disbut.MessageButton()
    .setLabel(`<${ayarlar.button_ileri_geri}`)
    .setStyle("gray")
    .setID("geri")   
    const ileri = new disbut.MessageButton()
    .setLabel(`${ayarlar.button_ileri_geri}>`)
    .setStyle("gray")
    .setID("ileri")   
    const gerimod = new disbut.MessageButton()
    .setLabel(`<${ayarlar.button_ileri_geri}`)
    .setStyle("gray")
    .setID("gerimod")   
    const ilerimod = new disbut.MessageButton()
    .setLabel(`${ayarlar.button_ileri_geri}>`)
    .setStyle("gray")
    .setID("ilerimod")  
    const gerikul = new disbut.MessageButton()
    .setLabel(`<${ayarlar.button_ileri_geri}`)
    .setStyle("gray")
    .setID("gerikul")   
    const ilerikul = new disbut.MessageButton()
    .setLabel(`${ayarlar.button_ileri_geri}>`)
    .setStyle("gray")
    .setID("ilerikul")   
    const gerieğw = new disbut.MessageButton()
    .setLabel(`<${ayarlar.button_ileri_geri}`)
    .setStyle("gray")
    .setID("gerieğw")   
    const ilerieğw = new disbut.MessageButton()
    .setLabel(`${ayarlar.button_ileri_geri}>`)
    .setStyle("gray")
    .setID("ilerieğw")   
    const gerieko = new disbut.MessageButton()
    .setLabel(`<${ayarlar.button_ileri_geri}`)
    .setStyle("gray")
    .setID("gerieko")   
    const ilerieko = new disbut.MessageButton()
    .setLabel(`${ayarlar.button_ileri_geri}>`)
    .setStyle("gray")
    .setID("ilerieko")
    const gerimed = new disbut.MessageButton()
    .setLabel(`<${ayarlar.button_ileri_geri}`)
    .setStyle("gray")
    .setID("gerimed")   
    const ilerimed = new disbut.MessageButton()
    .setLabel(`${ayarlar.button_ileri_geri}>`)
    .setStyle("gray")
    .setID("ilerimed")   
    const gerisev = new disbut.MessageButton()
    .setLabel(`<${ayarlar.button_ileri_geri}`)
    .setStyle("gray")
    .setID("gerisev")   
    const ilerisev = new disbut.MessageButton()
    .setLabel(`${ayarlar.button_ileri_geri}>`)
    .setStyle("gray")
    .setID("ilerisev")   
    const dclink = new disbut.MessageButton()
    .setLabel('Discord')
    .setStyle("url")
    .setURL("https://www.discord.gg/2bZmsTA")
    //embedler
    const moderasyon = new Discord.MessageEmbed()
    .setTitle(ayarlar.moderasyon_title)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    const kullanıcı = new Discord.MessageEmbed()
    .setTitle(ayarlar.kullanıcı_title)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    const eğlence = new Discord.MessageEmbed()
    .setTitle(ayarlar.eğlence_title)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    const ekonomi = new Discord.MessageEmbed()
    .setTitle(ayarlar.ekonomi_title)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    const sm = new Discord.MessageEmbed()
    .setTitle(ayarlar.sosyalmedya_title)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    const seviye = new Discord.MessageEmbed()
    .setTitle(ayarlar.seviye_title)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    //yardımlar
  if(!args[0]){
    const yardım = new Discord.MessageEmbed()
    .setTitle(ayarlar.ayarlar_title)
    .addField("Moderasyon", `${prefix}yardım moderasyon`, true)
    .addField("Kullanıcı", `${prefix}yardım kullanıcı`, true)
    .addField("Eğlence", `${prefix}yardım eğlence`, true)
    .addField("Ekonomi", `${prefix}yardım ekonomi`, true)
    .addField("Sosyal medya", `${prefix}yardım sosyalmedya`, true)
    .addField("Seviye", `${prefix}yardım seviye`, true)
    .setFooter(ayarlar.ayarlar_footer)
    .setColor(ayarlar.renk)
    message.channel.send({
      buttons: [ytlink, geri, ileri, dclink],
      embed: yardım
    })  
  }else if(args[0] === "moderasyon"){
    message.channel.send({
      buttons: [ytlink, gerimod, ilerimod, dclink],
      embed: moderasyon
    })  
  }else if(args[0] === "kullanıcı"){
    message.channel.send({
      buttons: [ytlink, gerikul, ilerikul, dclink],
      embed: kullanıcı
    })  
  }else if(args[0] === "eğlence"){
    message.channel.send({
      buttons: [ytlink, gerieğw, ilerieğw, dclink],
      embed: eğlence
    })  
  }else if(args[0] === "ekonomi"){
    message.channel.send({
      buttons: [ytlink, gerieko, ilerieko, dclink],
      embed: ekonomi
    })  
  }else if(args[0] === "sosyalmedya"){
    message.channel.send({
      buttons: [ytlink, gerimed, ilerimed, dclink],
      embed: sm
    }) 
  }else if(args[0] === "seviye"){
    message.channel.send({
      buttons: [ytlink, gerisev, ilerisev, dclink],
      embed: seviye
    }) 
  }
  
}
exports.conf = {
 enabled: true,//komut kullanıma hazırmı evet demek
 guildOnly: false,//Komut özel dende kullanılabilirmi şuan hayır.
 aliases: ["y","help","h"],//Komutun diğer adlarını yani diğer kullanılcak şeylerini giriyoz. 
 permLevel: 0,//komutun şuan herkesin kullanmasını sağladım server.js dede evelationda vardı. 
//1 = herkes kullanabilir.
//2 = sadece üyeleri banla yetkisi olan kullanabilir.
//3 = Yönetici yetkisi olanlar kullanabilir.
//4 = Sadece bot sahibi kullanabilir.  
}
exports.help = {
  name: 'yardım',//buraya komutun adını yaz.
  description: 'yardım',//burda komutun açıklamasını yazıyoruz.
  usage: 'yardım'//buraya komut nasıl kullanılır onu yazdım.d! yerine istediğin prefixi yaz.
}
