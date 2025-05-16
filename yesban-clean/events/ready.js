const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;



module.exports = client => {
  
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
  
var oyun = [
        "s!yardım = Komutlar",
        "s!davet = Botu davet edebilirsiniz",
        "discord.js v12 geçtik",
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "" );
        }, 2 * 2500);
    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("DND");
  client.user.setActivity(`${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
};
