const db = require('quick.db')
const Discord = require('discord.js')


exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send(`Aç yada kapat yazmalısın!! Örnek:s!sa-as aç`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Bu komutu kullanmak için`MESAJLARI_YÖNET` yetkisine sahip olmalısın!')

  if (args[0] == 'aç') {
    db.set(`ssaass_${message.guild.id}`, 'acik')
    
        const açıldı = new Discord.MessageEmbed()
    .setTitle("SA AS")
    .addField("Selam verme", `açıldı`)
    .setColor("RANDOM")
        
      message.channel.send(açıldı)
  }
  if (args[0] == 'kapat') {
    db.set(`ssaass_${message.guild.id}`, 'kapali')
    
    const kapalı = new Discord.MessageEmbed()
    .setTitle("SA AS")
    .addField("Selam verme", `kapandı`)
    .setColor("RANDOM")
    
      message.channel.send(kapalı)
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sa-as-sistemi'],
  permLevel: 0
};

exports.help = {
  name: 'sa-as',
  description: 'sa as ayarlar',
  usage: 'sa-as'
};