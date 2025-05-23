const Discord = require('discord.js');
const db = require("quick.db");
const ayarlar = require("../ayarlar.json")
const mapping = {
    ' ': '   ',
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five:',
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
    '!': ':grey_exclamation:',
    '?': ':grey_question:',
    '#': ':hash:',
    '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
	mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});


exports.run = function(client, message, args) {
  
    const prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix;

	if (args.length < 1) return message.reply(`Lütfen bir mesaj belirt. **Doğru Kullanım**: ${prefix}emojiyazı <mesaj>`)
		
	message.channel.send(args.join(' ').split('').map(c => mapping[c] || c).join(' '));

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'emojiyazı', 
  description: 'Mesajınızı emoji haline getirir',
  usage: 'emojiyazı <mesaj>'
};