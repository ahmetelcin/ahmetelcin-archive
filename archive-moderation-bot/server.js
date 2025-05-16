const Discord = require('discord.js');
const client = new Discord.Client();
const Constants = require('discord.js/src/util/Constants.js');
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const DBL = require('dblapi.js');
const disbut = require('discord-buttons');
const ms = require("parse-ms")
disbut(client);

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


const log = message => {
  console.log(`${message}`);
};

//////////////komut dosyası tanımlama

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};  

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);
/////buttons
client.on('clickButton', async (button) => {
  console.log(button.id)
  let prefix = db.fetch(`prefix_${button.message.guild.id}`) ? db.fetch(`prefix_${button.message.guild.id}`) : ayarlar.prefix
  
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
  
  if(button.id === "ileri"){
    button.message.edit({
      buttons: [ytlink, gerimod, ilerimod, dclink],
      embed: moderasyon
    })  
  }else if(button.id === "geri"){
    button.message.edit({
      buttons: [ytlink, gerisev, ilerisev, dclink],
      embed: seviye
    })  
  }else if(button.id === "gerimod"){
    button.message.edit({
      buttons: [ytlink, geri, ileri, dclink],
      embed: yardım
    })  
  }else if(button.id === "ilerimod"){
    button.message.edit({
      buttons: [ytlink, gerikul, ilerikul, dclink],
      embed: kullanıcı
    })  
  }else if(button.id === "gerikul"){
    button.message.edit({
      buttons: [ytlink, gerimod, ilerimod, dclink],
      embed: moderasyon
    })  
  }else if(button.id === "ilerikul"){
    button.message.edit({
      buttons: [ytlink, gerieğw, ilerieğw, dclink],
      embed: eğlence
    })  
  }else if(button.id === "gerieğw"){
    button.message.edit({
      buttons: [ytlink, gerikul, ilerikul, dclink],
      embed: kullanıcı
    })  
  }else if(button.id === "ilerieğw"){
    button.message.edit({
      buttons: [ytlink, gerieko, ilerieko, dclink],
      embed: ekonomi
    })  
  }else if(button.id === "gerieko"){
    button.message.edit({
      buttons: [ytlink, gerieğw, ilerieğw, dclink],
      embed: eğlence
    })  
  }else if(button.id === "ilerieko"){
    button.message.edit({
      buttons: [ytlink, gerimed, ilerimed, dclink],
      embed: sm
    })  
  }else if(button.id === "gerimed"){
    button.message.edit({
      buttons: [ytlink, gerieko, ilerieko, dclink],
      embed: ekonomi
    })  
  }else if(button.id === "ilerimed"){
    button.message.edit({
      buttons: [ytlink, gerisev, ilerisev, dclink],
      embed: seviye
    })  
  }else if(button.id === "gerisev"){
    button.message.edit({
      buttons: [ytlink, gerimed, ilerimed, dclink],
      embed: sm
    })  
  }else if(button.id === "ilerisev"){
    button.message.edit({
      buttons: [ytlink, geri, ileri, dclink],
      embed: yardım
    })  
  }
})
/////////////afk

client.on('message', async message => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
 
  let kullanıcı = message.mentions.users.first() || message.author
  let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`)
  let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`)
  let afktaym = await db.fetch(`afk_taym_${kullanıcı.id}`, Date.now)
  let sebep = afkdkullanıcı
     let dil = db.fetch(`dil_${message.guild.id}`)
     let zaman = db.get(`afk_taym_${message.author.id}`)
     let time = ms(Date.now() - zaman)
     let timeday = " "
     let timehour = " "
     let timeminute = " "

  var hours = moment(afktaym).fromNow();
     
  if (message.author.bot) return;
  if (message.content.includes(`${prefix}afk`)) return;
  if(time.days !== "0"){
    let timeday = `${time.days} gün `
  }
  if(time.hours !== "0"){
    let timehour = `${time.hours} saat `
  }
  if(time.minutes !== "0"){
    let timeminutes = `${time.minutes} dakika ` 
  }
  
  if (message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      if(time.days === "0"){
        if(time.hours === "0"){
          if(time.minutes === "0"){
       const embed = new Discord.MessageEmbed()
    .setTitle(ayarlar.kullanıcı_title)
    .addField("AFK", `<@${message.author.id}> adlı kullanıcı artık AFK değil`)
    .addField("Sebep", `${sebep}`)
    .addField("Geçen süre", `HATA`)
    .addField("Geçen süre", `${time.seconds} saniye`)
    .setFooter(ayarlar.ayarlar_footer)
           .setColor(ayarlar.renk)
       message.channel.send({embed})
      db.delete(`afk_${message.author.id}`)
          }else{
       const embed = new Discord.MessageEmbed()
    .setTitle(ayarlar.kullanıcı_title)
    .addField("AFK", `<@${message.author.id}> adlı kullanıcı artık AFK değil`)
    .addField("Sebep", `${sebep}`)
    .addField("Geçen süre", `${time.minutes} dakika , ${time.seconds} saniye`)
    .setFooter(ayarlar.ayarlar_footer)
           .setColor(ayarlar.renk)
       message.channel.send({embed})
      db.delete(`afk_${message.author.id}`)
          }
        }else{
       const embed = new Discord.MessageEmbed()
    .setTitle(ayarlar.kullanıcı_title)
    .addField("AFK", `<@${message.author.id}> adlı kullanıcı artık AFK değil`)
    .addField("Sebep", `${sebep}`)
    .addField("Geçen süre", `${time.hours} saat, ${time.minutes} dakika , ${time.seconds} saniye`)
    .setFooter(ayarlar.ayarlar_footer)
           .setColor(ayarlar.renk)
       message.channel.send({embed})
      db.delete(`afk_${message.author.id}`)
    }
  }else{
    const embed = new Discord.MessageEmbed()
    .setTitle(ayarlar.kullanıcı_title)
    .addField("AFK", `<@${message.author.id}> adlı kullanıcı artık AFK değil`)
    .addField("Sebep", `${sebep}`)
    .addField("Geçen süre", `${time.days} gün ${time.hours} saat, ${time.minutes} dakika , ${time.seconds} saniye`)
    .setFooter(ayarlar.ayarlar_footer)
           .setColor(ayarlar.renk)
       message.channel.send({embed})
      db.delete(`afk_${message.author.id}`)
  }
}
}
    
    if (message.mentions.user === afkkullanıcı) {
             const embed = new Discord.MessageEmbed()
    .setTitle(ayarlar.kullanıcı_title)
    .addField("AFK", `<@${message.author.id}> şu anda AFK`)
    .addField("Sebep", `${afkkullanıcı}`)
    .setFooter(ayarlar.ayarlar_footer)
                 .setColor(ayarlar.renk)
       message.channel.send({embed})
    }
  

  if (!message.content.includes(`<@${message.author.id}>`)) {
    if (afkdkullanıcı) {
      if(time.days === "0"){
        if(time.hours === "0"){
          if(time.minutes === "0"){
       const embed = new Discord.MessageEmbed()
    .setTitle(ayarlar.kullanıcı_title)
    .addField("AFK", `<@${message.author.id}> adlı kullanıcı artık AFK değil`)
    .addField("Sebep", `${sebep}`)
    .addField("Geçen süre", `HATA`)
    .addField("Geçen süre", `${time.seconds} saniye`)
    .setFooter(ayarlar.ayarlar_footer)
           .setColor(ayarlar.renk)
       message.channel.send({embed})
      db.delete(`afk_${message.author.id}`)
          }else{
       const embed = new Discord.MessageEmbed()
    .setTitle(ayarlar.kullanıcı_title)
    .addField("AFK", `<@${message.author.id}> adlı kullanıcı artık AFK değil`)
    .addField("Sebep", `${sebep}`)
    .addField("Geçen süre", `${time.minutes} dakika , ${time.seconds} saniye`)
    .setFooter(ayarlar.ayarlar_footer)
           .setColor(ayarlar.renk)
       message.channel.send({embed})
      db.delete(`afk_${message.author.id}`)
          }
        }else{
       const embed = new Discord.MessageEmbed()
    .setTitle(ayarlar.kullanıcı_title)
    .addField("AFK", `<@${message.author.id}> adlı kullanıcı artık AFK değil`)
    .addField("Sebep", `${sebep}`)
    .addField("Geçen süre", `${time.hours} saat, ${time.minutes} dakika , ${time.seconds} saniye`)
    .setFooter(ayarlar.ayarlar_footer)
           .setColor(ayarlar.renk)
       message.channel.send({embed})
      db.delete(`afk_${message.author.id}`)
    }
  }else{
    const embed = new Discord.MessageEmbed()
    .setTitle(ayarlar.kullanıcı_title)
    .addField("AFK", `<@${message.author.id}> adlı kullanıcı artık AFK değil`)
    .addField("Sebep", `${sebep}`)
    .addField("Geçen süre", `${time.days} gün ${time.hours} saat, ${time.minutes} dakika , ${time.seconds} saniye`)
    .setFooter(ayarlar.ayarlar_footer)
           .setColor(ayarlar.renk)
       message.channel.send({embed})
      db.delete(`afk_${message.author.id}`)
  }
}
}});