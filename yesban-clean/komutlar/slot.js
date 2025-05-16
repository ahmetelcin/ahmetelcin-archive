const Discord = require("discord.js");
const { Command } = require("discord.js-commando");
const { stripIndents } = require("common-tags");
const db = require("quick.db")
const slots = ["🍇", "🍊", "🍐", "🍒", "🍋"];
var ekonomi = new db.table('ekonomi')

exports.run = function(client, message, args) {
  
      let user = message.author;
      let kazanç2 = 310;
       let amount = ekonomi.fetch(`money_${message.guild.id}_${message.author.id}`)
                   const fakır = new Discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Slot",`Paranyok çalış`)
      .setColor("RANDOM")
               if(amount < 31) return message.channel.send(fakır);
        ekonomi.subtract(`money_${message.guild.id}_${message.author.id}`, 31);



  
  var slot1 = slots[Math.floor(Math.random() * slots.length)];
  var slot2 = slots[Math.floor(Math.random() * slots.length)];
  var slot3 = slots[Math.floor(Math.random() * slots.length)];

  if (slot1 === slot2 && slot1 === slot3) {
    
      const kazanç = new Discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Slot",` ${slot1} : ${slot2} : ${slot3} \n 	310 <:samasidedolar:771015664453943316> kazandın! `)
      .setColor("RANDOM")
    
              ekonomi.add(`money_${message.guild.id}_${user.id}`, kazanç2);
    message.channel.send(kazanç);
  } else {
    
          const kayıp = new Discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Slot",` ${slot1} : ${slot2} : ${slot3} \n 	31 <:samasidedolar:771015664453943316> kaybettin! `)
      .setColor("RANDOM")
    
    message.channel.send(kayıp);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slot", "slotçevir", "slotoyna"],
  permLevel: 0
};

exports.help = {
  name: "slots",
  description: "Slots oyunu oynatır",
  usage: "slots"
};
