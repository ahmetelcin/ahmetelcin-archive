const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")


exports.run = async (bot, message, args) => {

  const prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix;

  
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(new Discord.MessageEmbed().setDescription('Bu komutu kullanmak için **Sunucuyu yönet** yetkisine sahip olmalısın.').setColor(10038562));
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    if (!rMember) return message.channel.send(new Discord.MessageEmbed().setDescription(`Lütfen bir kullanıcı ismi gir.\nÖrnek: ` + prefix + `rolal **@İsim @Yetki**`).setColor(10038562).setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL).setTimestamp());
    let role = message.mentions.roles.first()

    if (!role) return message.channel.send(new Discord.MessageEmbed().setDescription(`Lütfen bir rol ismi gir.\nÖrnek: ` + prefix + `rolal **@İsim @Yetki**`).setColor(10038562).setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL).setTimestamp());
    let aRole = message.mentions.roles.first()
    if (!aRole) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu rolü bulamıyorum.\nÖrnek: ` + prefix + `rolal **@İsim @Yetki**`).setColor(10038562).setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL).setTimestamp());
  
    await (rMember.roles.remove(aRole.id))
    message.channel.send(new Discord.MessageEmbed().setDescription(`${rMember} isimli üyeden \`${role.name}\` isimli yetki başarıyla alındı! :white_check_mark:`).setColor('RANDOM'));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolal'],
  permLevel: 0
};

exports.help = {
  name: "rolal",
  description: "Kişilere Rol yetkisi alır",
  usage: "rol-al <mesaj>"
};