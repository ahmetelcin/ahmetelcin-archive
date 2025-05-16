const Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
var os = require('os');
const DBL = require('dblapi.js');



module.exports.run = async(client, message, args) => {
if (message.author.id !== "701406325438939196") {
    return message.channel.send("Bunu Sadece Sahibim Kullanabilir");
}  
  
        const dizi = []

      client.guilds.cache.forEach((item, i) => {
        dizi.push(item.memberCount)
      });

      var toplam = 0

      for (var i = 0; i < dizi.length; i++) {
        if (isNaN(dizi[i])) {
          continue;
        }

        toplam += Number(dizi[i]);

      }
  
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed() 
  .setColor(0xFF0000) 
  .setTimestamp() 
  .setAuthor(message.author.username, message.author.avatarURL) 
  .addField('Uyarı', 'Bu komutu özel mesajlarda kullanamazsın.');                                   
    return message.author.send(ozelmesajuyari); } 
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(':bar_chart: İstatistik;')
    .addField(':timer: Gecikme: ', `\`${Math.round(client.ws.ping)} ms\``)
      .addField(':headphones: Müzik Çalınan Sunucu Sayısı;', `\`${client.voice.connections.size}\``)
    .addField('<:karnyaraq:755719654449610764>  Çalışma Süresi: ', `\`${duration}\``)
    .addField('<:MAHOOO:793455109891555380>  Kullanıcılar:', `\`${toplam}\``)
    .addField(':tv: Kanallar:', `\`${client.channels.cache.size}\``)
    .addField(':clipboard: Sunucular:', `\`${client.guilds.cache.size}\``)
        .addField('<a:razernah:791596641320566787> Bellek Değeri:', `\`${(os.totalmem() / 1024 / 1024).toFixed(2)} MB (${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB)\``)
    .addField('<a:DANS:793385275765948437> Bellek kullanımı:', `\`${(process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2)}\``)
    .addField('<:exvat:791596640829046794>  CPU:', `\`${os.cpus().map(i => i.model)[0]}\``)
    .addField('<:NOOOO:791596640267927562>  CPU Hızı:', `\`${(os.cpus().map(i => i.speed)[0]).toFixed(2)} MHz\``)
    .addField(':book: Kütüphanesi;', `\`discord.js\``)
    .addField(`:inbox_tray: Discord.js sürümü:`, `\`v${Discord.version}\``)
      .addField('**:paperclip: Botun Başlanma Zamanı:**', "`Bot **20/09/2020**'de yapılmaya başlanmıştır`")
        .addField('<:omg_sama:733419047814824046> Yapımcım:', '<@701406325438939196> \n' )
    .setFooter('NoBan Bot', client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embed);
}
exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['istatistik', 'botbilgi', 'bot-bilgi', 'i'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'bot istatstiği',
  usage: 'duyuru [duyuru]'
};  