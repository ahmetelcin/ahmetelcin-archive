const DBL = require("dblapi.js")   
const Discord = require("discord.js")

exports.run = (client, message, params) => {
    let user = message.mentions.users.first();
    const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1NzMwNzQyMDA4MjE3NjA1MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjExMjE4NzI5fQ.VhXKZ-l7ZuvQU_rupF-d1d_MtgX4-eriua_XNQx-vv8',client)
    dbl.hasVoted(user.id).then(voted => {
      if(voted){
        const votevermiş = new Discord.MessageEmbed()
        .setTitle("AFERİİİM")
        .setDescription(`Aferim vote vermişsin <@${user.id}>`)
        message.channel.send(votevermiş)
      }else{
        const votevermemiş = new Discord.MessageEmbed()
        .setTitle("HAİN")
        .setDescription(`<@${user.id}> vote vermemiş hain`)
        message.channel.send(votevermemiş)
      }
    })}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['votekontrol'],
  permLevel: 4
};

exports.help = {
  name: 'votekontrol',
  description: 'votekontrol',
  usage: 'votekontrol'
};  