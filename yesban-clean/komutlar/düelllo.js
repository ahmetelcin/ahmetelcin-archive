  const Discord = require('discord.js');
const { stripIndents } = require('common-tags');  
const { randomRange, verify } = require('../util/Util.js');
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
  
    const prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix;
  
  this.fighting = new Set();

    let opponent = message.mentions.users.first()
        const etiket = new Discord.MessageEmbed()
        .setTitle("Düello")
        .addField("Yanlış Kullanım", `\`Oynamak istediğin kişiyi etiketlemelisin\``)
        .addField("Doğru Kullanım", `\`${prefix}düello <@oynamakistediğinkişi>\``)
        .setColor("RANDOM")

    if (!opponent) return message.reply(etiket)
  
          const botlaoyun = new Discord.MessageEmbed()
          .setTitle("Düello")
          .addField("Yanlış Kullanıcı", `\`Botlarla oynuyamazsın\``)
          .setColor("RANDOM")

    if (opponent.bot) return message.reply(botlaoyun);
  
            const kendinleduel = new Discord.MessageEmbed()
          .setTitle("Düello")
          .addField("Yanlış Kullanıcı", `\`Kendinle düello atamazsın\``)
          .setColor("RANDOM")

  if (opponent.id === message.author.id) return message.reply(kendinleduel);
  
              const dolukanal = new Discord.MessageEmbed()
          .setTitle("Düello")
          .addField("Kanal Dolu", `\`Kanallarda en fazla 1 düello olabilir\``)
          .setColor("RANDOM")
  
        if (this.fighting.has(message.channel.id)) return message.reply(dolukanal);  
        this.fighting.add(message.channel.id);
        try {
            if (!opponent.bot) {      
              
           const kabul = new Discord.MessageEmbed()
          .setTitle("Düello")
          .addField("Düello isteği", `${opponent},\` düello isteği geldi. Düello'yu kabul ediyor musun?\``)
           .addField("Kabul Ediyormusun", `**evet** veya **hayır** olarak cevap veriniz`)
          .setColor("RANDOM")
              
                await message.channel.send(kabul);
                const verification = await verify(message.channel, opponent);
                if (!verification) {
                    this.fighting.delete(message.channel.id);
                    return message.channel.send(`Düello kabul edilmedi`);
                }          
            }
            let userHP = 500;
            let oppoHP = 500;
            let userTurn = false;
            let guard = false;
            const reset = (changeGuard = true) => {
                userTurn = !userTurn; 
                if (changeGuard && guard) guard = false;
            };
            const dealDamage = damage => {
                if (userTurn) oppoHP -= damage;
                else userHP -= damage;
            };
            const forfeit = () => {
                if (userTurn) userHP = 0;
                else oppoHP = 0;
            };
            while (userHP > 0 && oppoHP > 0) { // eslint-disable-line no-unmodified-loop-condition
                const user = userTurn ? message.author : opponent;
                let choice;
                if (!opponent.bot || (opponent.bot && userTurn)) {
          const seçim = new Discord.MessageEmbed()
          .setTitle("Düello")
          .addField("Seçim", `${user}, ne yapmak istersin? \`saldır\`, \`savun\`, \`ultra güç\`, veya \`kaç\`? \n`)
          .addField("CANLAR", `**${message.author.username}**: ${userHP} :heartpulse: \n **${opponent.username}**: ${oppoHP} :heartpulse:`)
          .setColor("RANDOM")
                    await message.channel.send(seçim);
                    const filter = res =>
                        res.author.id === user.id && ['saldır', 'savun', 'ultra güç', 'kaç'].includes(res.content.toLowerCase());
                    const turn = await message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 30000
                    });
                    if (!turn.size) {
                        await message.reply(`Üzgünüm ama, süre doldu!`);
                        reset();
                        continue;
                    }
                    choice = turn.first().content.toLowerCase();
                } else {
                    const choices = ['saldır', 'savun', 'ultra güç'];
                    choice = choices[Math.floor(Math.random() * choices.length)];
                }
                if (choice === 'saldır') {
                    const damage = Math.floor(Math.random() * (guard ? 10 : 100)) + 1;
                                    
          const saldırııı = new Discord.MessageEmbed()
          .setTitle("Düello")
          .addField("Saldır", `${user}, **${damage}** hasar vurdu!`)
          .setColor("RANDOM")
                  
                    await message.channel.send(saldırııı);
                    dealDamage(damage);
                    reset();
                } else if (choice === 'savun') {
                  
          const savuuun = new Discord.MessageEmbed()
          .setTitle("Düello")
          .addField("Savun", `${user}, kendisini süper kalkan ile savundu!`)
          .setColor("RANDOM")
                  
                    await message.channel.send(savuuun);
                    guard = true;
                    reset(false);
                } else if (choice === 'ultra güç') {
                    const miss = Math.floor(Math.random() * 4);
                    if (!miss) {
                        const damage = randomRange(100, guard ? 150 : 300);
                      
          const ultragüç1 = new Discord.MessageEmbed()
          .setTitle("Düello")
          .addField("Ultra Güç", `${user}, Hacının şalgamını içip **${damage}** hasar vurdun!!`)
          .setColor("RANDOM")
                      
                        await message.channel.send(ultragüç1);
                        dealDamage(damage);
                    } else {
                      
          const ultragüç2 = new Discord.MessageEmbed()
          .setTitle("Düello")
          .addField("Ultra Güç", `${user}, Hacının şalgamını bulamadından özel gücünü kullanamadın!`)
          .setColor("RANDOM")
                                
                        await message.channel.send(ultragüç2);
                    }
                    reset();
                } else if (choice === 'kaç') {
                  
          const kaaaç = new Discord.MessageEmbed()
          .setTitle("Düello")
          .addField("Kaç", `${user}, kaçtı! Korkak!`)
          .setColor("RANDOM")
                  
                    await message.channel.send(kaaaç);
                    forfeit();
                    break;
                } else {
                    await message.reply('Ne yapmak istediğini anlamadım.');
                }
            }
            this.fighting.delete(message.channel.id);
            const winner = userHP > oppoHP ? message.author : opponent;
          
          const win = new Discord.MessageEmbed()
          .setTitle("Düello")
          .addField("Win", `Oyun bitti! Tebrikler, **${winner}** kazandı! \n`)
          .addField("CANLAR", `**${message.author.username}**: ${userHP} :heartpulse: \n**${opponent.username}**: ${oppoHP} :heartpulse:`)
          .setColor("RANDOM")
          
            return message.channel.send(win);
        } catch (err) {
            this.fighting.delete(message.channel.id);
            throw err;
        }
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['1vs1', '1v1', 'savaş'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'düello',
  category: "eğlence",
  description: 'İstediğiniz bir kişi ile düello atarsınız!',
  usage: 'düello <@kullan��cı>'
};