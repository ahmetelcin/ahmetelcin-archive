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

///sa as

client.on("message", async msg => {
  const i = await db.fetch(`ssaass_${msg.guild.id}`);
  if (i == "acik") {
    if (
      msg.content.toLowerCase() == "sa" ||
      msg.content.toLowerCase() == "s.a" ||
      msg.content.toLowerCase() == "s.a" ||
      msg.content.toLowerCase() == "selamun aleyküm"
    ) {
      try {
        return msg.reply("Aleyküm Selam, Hoşgeldin " );
     } catch (err) {
        console.log(err);
      }
    }
  } else if (i == "kapali") {
  }
  if (!i) return;
});

////////cevap
client.on("message", async msg => {
  const soru = await db.fetch(`soru_${msg.guild.id}`);
  const cevap = await db.fetch(`cevap_${msg.guild.id}`)

    if (
      msg.content.toLowerCase() == `${soru}`
    ) {
      try {
        return msg.channel.send(cevap);
     } catch (err) {
        console.log(err);
      }
    }
      });
   


/////////////afk

client.on('message', async message => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
 
  let kullanıcı = message.mentions.users.first() || message.author
  let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`)
  let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`)
  let sebep = afkkullanıcı
 
  if (message.author.bot) return;
  if (message.content.includes(`${prefix}afk`)) return;
 
  if (message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
       const embed = new Discord.MessageEmbed()
                .setAuthor('AFK')
                .addField("GERİ DÖNDÜ", `\` **<@${kullanıcı.id}>** adlı kullanıcı artık AFK değil\``)
                .addField("Sebep", `\`${sebep}\``)
                .setColor("RANDOM")
       message.channel.send({embed})
      db.delete(`afk_${message.author.id}`)
    }
    if (afkkullanıcı) {
             const embed = new Discord.MessageEmbed()
                .addField("GİTTİ", `\` **${kullanıcı.tag}** şu anda AFK\``)
                .addField("Sebep", `\`${sebep}\``)
                .setColor("RANDOM")
       message.channel.send({embed})
             
    } 
  }

  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
                   const embed = new Discord.MessageEmbed()
                .setAuthor('AFK')
                .addField("GERİ DÖNDÜ", `**<@${kullanıcı.id}>**\` adlı kullanıcı artık AFK değil\``)
                .addField("Sebep", `\`${sebep}\``)
                .setColor("RANDOM")
       message.channel.send({embed})
      db.delete(`afk_${message.author.id}`)
    }
  }
  });

//////////////////////////////////////////////////////////////////////////////////////dmlog
client.on("messageUpdate", async (oldMessage, newMessage) => {
  
  if(newMessage.author.bot || newMessage.channel.type === "dm")return;
    if(oldMessage.content == newMessage.content)return;

  
  const logak = await db.fetch(`logak_${newMessage.guild.id}`)
  const mesajedit = await db.fetch(`mesajedit_${newMessage.guild.id}`)
  const logkanalıid = await db.fetch(`logkanalid_${newMessage.guild.id}`)
  
  let logkanalı = newMessage.guild.channels.cache.get(logkanalıid)
  
  if(logak === "açık"){
    if(mesajedit === "açık"){
      const mesajeditembed = new Discord.MessageEmbed()
      .setTitle("YesBan LOG")
      .addField("Eski Mesaj", oldMessage.content, true)
      .addField("Yeni Mesaj", newMessage.content, true)
      .addField("Kanal", newMessage.channel.name, true)
      .setColor("RANDOM")
      .setThumbnail(newMessage.author.avatarURL)
      logkanalı.send(mesajeditembed)
    }else if(mesajedit === "kapalı"){}
  }else if(logak === "kapalı"){}
})

client.on("messageDelete", async (message, channel) => {
    const logak = await db.fetch(`logak_${message.guild.id}`)
  const mesajedit = await db.fetch(`mesajedit_${message.guild.id}`)
  const logkanalıid = await db.fetch(`logkanalid_${message.guild.id}`)
  
    let logkanalı = message.guild.channels.cache.get(logkanalıid)

    if(logak === "açık"){
    if(mesajedit === "açık"){
      const mesajsilme = new Discord.MessageEmbed()
      .setTitle("YesBan LOG")
      .addField("Kanal", message.channel.name, true)
      .addField("Silinen mesaj", message.content, true)
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      logkanalı.send(mesajsilme)
    }else if(mesajedit === "kapalı"){}
    }else if(mesajedit === "kapalı"){}
})

client.on("channelDelete", async function(channel){
  const kanaledit = db.fetch(`kanaledit_${channel.guild.id}`)
    const logkanalıid = await db.fetch(`logkanalid_${channel.guild.id}`)
    const logak = await db.fetch(`logak_${channel.guild.id}`)
    
        let logkanalı = channel.guild.channels.cache.get(logkanalıid)


        if(logak === "açık"){
    if(kanaledit === "açık"){
            const kanalsilme = new Discord.MessageEmbed()
      .setTitle("YesBan LOG")
      .addField("Kanal silindi", channel.name, true)
      .setColor("RANDOM")
      logkanalı.send(kanalsilme)
    }else if(kanaledit === "kapalı"){}
    }else if (logak ==="kapalı"){}
    
})

client.on("channelUpdate", async (oldChannel, newChannel) => {
  const kanaledit = db.fetch(`kanaledit_${newChannel.guild.id}`)
    const logkanalıid = await db.fetch(`logkanalid_${newChannel.guild.id}`)
    const logak = await db.fetch(`logak_${newChannel.guild.id}`)
    
        let logkanalı = newChannel.guild.channels.cache.get(logkanalıid)


        if(logak === "açık"){
    if(kanaledit === "açık"){
      const kanaleditlendi = new Discord.MessageEmbed()
      .setTitle("YesBan LOG")
      .addField("Eski kanal", oldChannel.name, true)
      .addField("Yeni kanal", newChannel.name, true)
      .setColor("RANDOM")
      logkanalı.send(kanaleditlendi)  
    }else if(kanaledit === "kapalı"){}
    }else if (logak ==="kapalı"){}
    
})

client.on("channelCreate", async function(channel){
  const kanaledit = db.fetch(`kanaledit_${channel.guild.id}`)
    const logkanalıid = await db.fetch(`logkanalid_${channel.guild.id}`)
    const logak = await db.fetch(`logak_${channel.guild.id}`)
    
        let logkanalı = channel.guild.channels.cache.get(logkanalıid)


        if(logak === "açık"){
    if(kanaledit === "açık"){
            const kanalsilme = new Discord.MessageEmbed()
      .setTitle("YesBan LOG")
      .addField("Kanal oluşturuldu", channel.name, true)
      .setColor("RANDOM")
      logkanalı.send(kanalsilme)
    }else if(kanaledit === "kapalı"){}
    }else if (logak ==="kapalı"){}
    
})

 client.on("guildBanAdd", async (guild, user) => {
    const üyeedit = db.fetch(`üyeedit_${guild.id}`)
    const logkanalıid = await db.fetch(`logkanalid_${guild.id}`)
    const logak = await db.fetch(`logak_${guild.id}`)
    
        let logkanalı = guild.channels.cache.get(logkanalıid)


        if(logak === "açık"){
    if(üyeedit === "açık"){
            const üyebanlanma = new Discord.MessageEmbed()
      .setTitle("YesBan LOG")
      .addField("Sunucudan yasaklanma", `<@${user.id}>`, true)
      .setColor("RANDOM")
      logkanalı.send(üyebanlanma)
    }else if(üyeedit === "kapalı"){}
    }else if (logak ==="kapalı"){}
    
})

 client.on("guildBanRemove", async (guild, user) => {
    const üyeedit = db.fetch(`üyeedit_${guild.id}`)
    const logkanalıid = await db.fetch(`logkanalid_${guild.id}`)
    const logak = await db.fetch(`logak_${guild.id}`)
    
        let logkanalı = guild.channels.cache.get(logkanalıid)


        if(logak === "açık"){
    if(üyeedit === "açık"){
            const üyebanlanma = new Discord.MessageEmbed()
      .setTitle("YesBan LOG")
      .addField("Sunucu yasağı kaldırıldı", `<@${user.id}>`, true)
      .setColor("RANDOM")
      logkanalı.send(üyebanlanma)
    }else if(üyeedit === "kapalı"){}
    }else if (logak ==="kapalı"){}
    
})

 client.on("roleCreate", async (role) => {
    const roledit = db.fetch(`roledit_${role.guild.id}`)
    const logkanalıid = await db.fetch(`logkanalid_${role.guild.id}`)
    const logak = await db.fetch(`logak_${role.guild.id}`)
    
        let logkanalı = role.guild.channels.cache.get(logkanalıid)


        if(logak === "açık"){
    if(roledit === "açık"){
            const rololuşturma = new Discord.MessageEmbed()
      .setTitle("YesBan LOG")
      .addField("Yeni rol oluşturuldu", role.name, true)
      .setColor("RANDOM")
      logkanalı.send(rololuşturma)
    }else if(roledit === "kapalı"){}
    }else if (logak ==="kapalı"){}
    
})

 client.on("roleDelete", async (role) => {
    const roledit = db.fetch(`roledit_${role.guild.id}`)
    const logkanalıid = await db.fetch(`logkanalid_${role.guild.id}`)
    const logak = await db.fetch(`logak_${role.guild.id}`)
    
        let logkanalı = role.guild.channels.cache.get(logkanalıid)


        if(logak === "açık"){
    if(roledit === "açık"){
            const rololuşturma = new Discord.MessageEmbed()
      .setTitle("YesBan LOG")
      .addField("Rol silindi", role.name, true)
      .setColor("RANDOM")
      logkanalı.send(rololuşturma)
    }else if(roledit === "kapalı"){}
    }else if (logak ==="kapalı"){}
    
})

 client.on("roleUpdate", async (oldRole, newRole) => {
    const roledit = db.fetch(`roledit_${newRole.guild.id}`)
    const logkanalıid = await db.fetch(`logkanalid_${newRole.guild.id}`)
    const logak = await db.fetch(`logak_${newRole.guild.id}`)
    
        let logkanalı = newRole.guild.channels.cache.get(logkanalıid)


        if(logak === "açık"){
    if(roledit === "açık"){
            const rololuşturma = new Discord.MessageEmbed()
      .setTitle("YesBan LOG")
      .addField("Rol editlendi", `**Eski adı:** ${oldRole.name} **Yeni adı:** ${newRole.name}`, true)
      .setColor("RANDOM")
      logkanalı.send(rololuşturma)
    }else if(roledit === "kapalı"){}
    }else if (logak ==="kapalı"){}
  
})

/////tagprefix
client.on("message",message=>{
  
    const prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix;
  
    if(message.content==`<@!${client.user.id}>`) return message.channel.send(`Prefixim : **${prefix}**`);
})