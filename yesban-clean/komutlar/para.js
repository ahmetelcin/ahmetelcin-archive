const db = require("quick.db")
const discord = require("discord.js")
var ekonomi = new db.table('ekonomi')

module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;

    let bal = await ekonomi.fetch(`money_${message.guild.id}_${user.id}`);
    if(bal === null) bal = 0;

    const embedyardim = new discord.MessageEmbed()
     .setTitle("YesBan Bankası")
    .addField("Paran", `${user} paran ${bal} <:samasidedolar:771015664453943316> `)
    .setImage("https://cdn.discordapp.com/attachments/736953434774700072/766615313231904768/samasidedolar.png")
    .setColor("RANDOM")
    message.channel.send(embedyardim)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['para'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'para',
    description: 'para',
    usage: 'para'
  };