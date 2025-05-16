const Discord = require(`discord.js`);
const DBL = require('dblapi.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
      const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1NzMwNzQyMDA4MjE3NjA1MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjExMjE4NzI5fQ.VhXKZ-l7ZuvQU_rupF-d1d_MtgX4-eriua_XNQx-vv8',client)
    dbl.hasVoted(message.author.id).then(voted => {
      if(voted){
 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.reply('bir oyuncu adı belirtmelisin.');
 if (mesaj == member) {  
    message.reply('kullanıcı değil, bir oyuncu adı belirtmelisin :/')
 } else {
 const mcbody = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setTitle('Oyuncu: ' + mesaj)
   .setImage(body)
 message.channel.send(mcbody);
 }
} else {
    if (message.channel.type !== 'dm') {
          const rip = new Discord.MessageEmbed()
              .setDescription("Bu komutu kullanmak için vote vermeniz lazım :" + ` [VOTE](https://top.gg/bot/757307420082176050/vote)`)
              .setColor('RANDOM')
  return message.channel.send(rip)
    }
}})}

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [`mcskin`],
 permLevel: 0,
 kategori: "eğlence" 
};

exports.help = {
 name: 'mcskin',
 description: 'Belirtilen oyuncunun kostümünü gösterir.',
 usage: 'mcbody <oyuncu>'
};