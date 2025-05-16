const Discord = require("discord.js");
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== ayarlar.sahip)
    return message.channel.send(
      "❌ Bu Komutu Sadece Yapımcılar Kullana Bilir!"
    );

  message.channel.send(`✅ Başarılı! Bot Yeniden Başlatılıdı..`);
  message.delete({ timeout: 5000, reason: 'It had to be done.' }).then(msg => {
    console.log(`Bot Yeniden Başlatıdı!`);

    process.exit(0);
  });
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r", "reboot", "yenile", "yenidenbaşlat"],
  permLevel: 0
}; //Dcs Ekibi

module.exports.help = {
  name: "reboot",
  description: "",
  usage: "reboot"
};