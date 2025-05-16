const db = require("quick.db")
const discord = require("discord.js")
const ayarlar = require('../ayarlar.json');
const TCMB_Doviz = require('tcmb-doviz');
const Doviz = new TCMB_Doviz();
const { randomRange, verify } = require('../util/Util.js');
var ekonomi = new db.table('ekonomi')

module.exports.run = async (client, message, args) => {
  
  if(message.author.id === "701406325438939196"){
      ekonomi.set(`meslek_${message.guild.id}_${message.author.id}`, 'PUTİN')

  const satılacakeşyalar = new discord.MessageEmbed()
  .setTitle("YesBan Bankası")
  .addField("Özel Meslek", `\`Haşmetli sahibim PUTİN\``)
  .setColor("RANDOM")
message.channel.send(satılacakeşyalar)
  }
  
  if(message.author.id === "438747621969100801"){
      ekonomi.set(`meslek_${message.guild.id}_${message.author.id}`, 'KİDİ')

  const satılacakeşyalar2 = new discord.MessageEmbed()
  .setTitle("YesBan Bankası")
  .addField("Özel Meslek", `\`Haşmetli KİDİ\``)
  .setColor("RANDOM")
message.channel.send(satılacakeşyalar2)
  }
  
      if(message.author.id === "410825183654445068"){
      ekonomi.set(`meslek_${message.guild.id}_${message.author.id}`, 'MUMUTÖÇ')

  const satılacakeşyalar2 = new discord.MessageEmbed()
  .setTitle("YesBan Bankası")
  .addField("Özel Meslek", `\`Haşmetli MUMUTÖÇ\``)
  .setColor("RANDOM")
message.channel.send(satılacakeşyalar2)
  }
  
        if(message.author.id === "707614770345279548"){
      ekonomi.set(`meslek_${message.guild.id}_${message.author.id}`, 'BAYTEX')

  const satılacakeşyalar2 = new discord.MessageEmbed()
  .setTitle("YesBan Bankası")
  .addField("Özel Meslek", `\`Haşmetli BAYTEX\``)
  .setColor("RANDOM")
message.channel.send(satılacakeşyalar2)
  }
  
          if(message.author.id === "648888358860488714"){
      ekonomi.set(`meslek_${message.guild.id}_${message.author.id}`, 'ZIKKIM')

  const satılacakeşyalar2 = new discord.MessageEmbed()
  .setTitle("YesBan Bankası")
  .addField("Özel Meslek", `\`Haşmetli ZIKKIM\``)
  .setColor("RANDOM")
message.channel.send(satılacakeşyalar2)
  }
  
            if(message.author.id === "496720140143034378"){
      ekonomi.set(`meslek_${message.guild.id}_${message.author.id}`, 'BOTTESTER')

  const satılacakeşyalar2 = new discord.MessageEmbed()
  .setTitle("YesBan Bankası")
  .addField("Özel Meslek", `\`Haşmetli BOTTESTER\``)
  .setColor("RANDOM")
message.channel.send(satılacakeşyalar2)
  }
  
              if(message.author.id === "489115102809948160"){
      ekonomi.set(`meslek_${message.guild.id}_${message.author.id}`, 'POLIP')

  const satılacakeşyalar2 = new discord.MessageEmbed()
  .setTitle("YesBan Bankası")
  .addField("Özel Meslek", `\`Haşmetli POLIP\``)
  .setColor("RANDOM")
message.channel.send(satılacakeşyalar2)
  }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [], 
    permLevel: 0
  };
  exports.help = {
    name: 'özelmeslek', 
    description: "özelmeslek",
    usage: 'özelmeslek'
  }