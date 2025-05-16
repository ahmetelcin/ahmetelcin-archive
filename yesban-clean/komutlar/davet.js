const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField("**İşte Davet**", "\n[Discord Sunucumuz](https://discord.gg/7BW2dSu) \n[Tıkla Ve Sunucuna Al](https://discord.com/oauth2/authorize?client_id=757307420082176050&scope=bot&permissions=805829694)" )
    message.channel.send(ozelmesajkontrol) 
}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linkini gönderir.',
  usage: 'davet'
};