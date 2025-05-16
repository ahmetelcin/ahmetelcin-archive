const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")


exports.run = async (bot, message, args) => {

  const prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix;

  
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(new Discord.MessageEmbed().setDescription('Bu komutu kullanmak için **Sunucuyu yönet** yetkisine sahip olmalısın.').setColor(10038562));
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    if (!rMember) return message.channel.send(new Discord.MessageEmbed().setDescription(`Lütfen bir kullanıcı ismi gir.\nÖrnek: ` + prefix + `rolver **@İsim @Yetki**`).setColor(10038562).setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL).setTimestamp());
    let role = message.mentions.roles.first()

    if (!role) return message.channel.send(new Discord.MessageEmbed().setDescription(`Lütfen bir rol ismi gir.\nÖrnek: ` + prefix + `rolver **@İsim @Yetki**`).setColor(10038562).setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL).setTimestamp());
    let aRole = message.mentions.roles.first()
    if (!aRole) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu rolü bulamıyorum.\nÖrnek: ` + prefix + `rolver **@İsim @Yetki**`).setColor(10038562).setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL).setTimestamp());

    if (rMember.roles.cache.has(aRole.id)) return message.channel.send(new Discord.MessageEmbed().setDescription('Bu kullanıcı zaten bu rolde.').setColor(10038562));
    await (rMember.roles.add(aRole.id))
    message.channel.send(new Discord.MessageEmbed().setDescription(`${rMember} isimli üyeye \`${role.name}\` isimli yetki başarıyla verildi! :white_check_mark:`).setColor('RANDOM'));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolver', 'rolekle'],
  permLevel: "0"
};

exports.help = {
  name: "rolver",
  description: "Kişilere Rol Yetkisi Verir",
  usage: "rol-ver <mesaj>"
};