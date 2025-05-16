const db = require("quick.db")
const discord = require("discord.js")
const ms = require("parse-ms")
const DBL = require('dblapi.js');
var ekonomi = new db.table('ekonomi')

module.exports.run = async (client, message, args) => {
    const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1NzMwNzQyMDA4MjE3NjA1MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjExMjE4NzI5fQ.VhXKZ-l7ZuvQU_rupF-d1d_MtgX4-eriua_XNQx-vv8',client)
    dbl.hasVoted(message.author.id).then(voted => {
      if(voted){
    let user = message.author;
    let timeout = 43200000;
    let amount = 1000;

    let daily = ekonomi.fetch(`votepara_${message.guild.id}_${user.id}`);

    if(daily !== null && timeout - (Date.now() - daily) > 0){
        let time = ms(timeout - (Date.now() - daily));
      
      const günlük = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Günlük",`Bir daha toplaman için ${time.hours}saat, ${time.minutes}dakika, ${time.seconds}saniye kaldı.`)
      .setColor("RANDOM")

        return message.channel.send(günlük)
    } else {
        ekonomi.add(`money_${message.guild.id}_${user.id}`, amount);
        ekonomi.set(`votepara_${message.guild.id}_${user.id}`, Date.now());
      
            const günlükpara = new discord.MessageEmbed()
      .setTitle("YesBan Bankası")
      .addField("Vote Para",`Başarılı! ${amount} <:samasidedolar:771015664453943316>  hesabına aktarıldı.`)
      .setColor("RANDOM")
      
        message.channel.send(günlükpara)
    }
} else {
    if (message.channel.type !== 'dm') {
          const rip = new discord.MessageEmbed()
              .setDescription("Bu komutu kullanmak için vote vermeniz lazım :" + ` [VOTE](https://top.gg/bot/757307420082176050/vote)`)
              .setColor('RANDOM')
  return message.channel.send(rip)
}
}
})
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['votepara'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'votepara',
    description: 'votepara',
    usage: 'votepara'
  };
