
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
  const prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  const kategori = args[0] ? args[0].toLowerCase() : null;

  const kategoriler = {
    kullanıcı: [
      '`afk` - AFK moduna geç',
      '`avatar` - Avatarınızı gösterir',
      '`davet` - Botun davet bağlantısını verir',
      '`kullanıcı-bilgi` - Kullanıcı bilgilerini gösterir',
      '`sunucubilgi` - Sunucu hakkında bilgi verir'
    ],
    admin: [
      '`ban` - Kullanıcıyı yasakla',
      '`kick` - Kullanıcıyı sunucudan at',
      '`log` - Log sistemini ayarla',
      '`prefix` - Prefix belirle',
      '`sil` - Mesaj sil',
      '`slowmode` - Yavaş mod ayarla',
      '`unban` - Yasak kaldır',
      '`uyar` - Kullanıcıyı uyar'
    ],
    eğlence: [
      '`aşkölç` - Aşk ölçer',
      '`dövüş` - Kullanıcıyla dövüş',
      '`duello` - Duello başlatır',
      '`emojiyazı` - Emojilerle yazı yazar',
      '`slot` - Slot oyunu',
      '`yazıtura` - Yazı tura atar'
    ],
    bot: [
      '`bahşiş` - Botu destekle',
      '`tavsiye` - Tavsiye gönder',
      '`vote` - Oy verme bağlantısı',
      '`website` - Proje sitesi'
    ],
    para: [
      '`çalış` - Para kazanırsın',
      '`günlük` - Günlük ödül alırsın',
      '`envanter` - Envanterini gösterir',
      '`market` - Marketi gösterir',
      '`satınal` - Ürün satın alır',
      '`sat` - Ürün satar',
      '`para` - Bakiye gösterir'
    ]
  };

  if (!kategori || !kategoriler[kategori]) {
    const anaEmbed = new Discord.MessageEmbed()
        .setTitle("📘 Komut Yardım Menüsü")
        .setColor("RANDOM")
        .setDescription("Aşağıdaki kategorilerden birini kullanarak detaylı yardım alabilirsiniz:")
        .addField("📂 Kategoriler", Object.keys(kategoriler).map(k => `\`${prefix}yardım ${k}\``).join(" | "))
        .setFooter("YesBan Bot Yardım");

    return message.channel.send(anaEmbed);
  }

  const kategoriEmbed = new Discord.MessageEmbed()
      .setTitle(`📚 ${kategori.charAt(0).toUpperCase() + kategori.slice(1)} Komutları`)
      .setColor("RANDOM")
      .setDescription(kategoriler[kategori].join("\n"))
      .setFooter("YesBan Bot Yardım");

  return message.channel.send(kategoriEmbed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım", "y", "h", "help"],
  permLevel: 0
};

module.exports.help = {
  name: "yardım",
  description: "Yardım menüsünü gösterir.",
  usage: "yardım [kategori]"
};
