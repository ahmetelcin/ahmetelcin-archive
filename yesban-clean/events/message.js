let talkedRecently = new Set();
const ayarlar = require('../ayarlar.json');//burayada ayarlar dosyasını tanımladım.
const db = require('quick.db')


module.exports = async message => {
  
  let aa = require('../ayarlar.json') 
  let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : aa.prefix  
  let client = message.client;//buraya clienti tanımladım.
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;//komutlarda kullanılacak prefixi buraya girdim.
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);//burada kullanmak için olan izinleri girdim server.js de olcak.
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);//koomutları çalıştırmak için bota girdim.
  }

};
