const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL())
  .addField(':warning: Uyarı :warning:', '`unban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  if (reason.length < 1) return message.reply('Ban kaldırma sebebini yazmalısın.');
  if (!user) return message.reply('Banı kaldırılacak kişinin ID numarasını yazmalısın.').catch(console.error);
  message.guild.members.unban(user);
  const unban = new Discord.MessageEmbed()
  .setTitle("YesBan Admin")
  .addField("Başarılı", `${user} id kullanıcı unbanlandı`)
  .setColor("RANDOM")
  message.channel.send(unban)


};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişinin banını kaldırır.',
  usage: 'unban [kullanıcı] [sebep]'
};