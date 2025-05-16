const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')


exports.run = function(client, message, args) {
  
    const prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix;
  
    var soru = args.join(' ');
    
    if(!soru) return message.reply('Bir işlem belirtin. **Doğru Kullanım**: hesapla <işlem>')
    else { let cevap;
        try {
            cevap = math.eval(soru)
        } catch(err) {
            message.channel.send('Hatalı işlem: **' + err)
        }

        const embed = new Discord.MessageEmbed()
        .addField('Soru', soru)
        .addField('Cevap', cevap)
        .setColor("RANDOM")

        message.channel.send(embed)
    }


};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'hesapla', 
  description: 'Belirtilen işlemi yapar.',
  usage: 'hesapla <işlem>'
};