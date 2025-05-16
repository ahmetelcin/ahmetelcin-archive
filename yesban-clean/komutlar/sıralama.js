const db = require('quick.db');
const Discord = require('discord.js');
var ekonomi = new db.table('ekonomi')



    exports.run = async (client, message, args) => {

        let money = ekonomi.get(`money_${message.guild.id}`)

        let content = "";


            const embed = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name}'s Leaderboard`)
            .setDescription(`${money}`)
            .setColor("RANDOM")
            .setTimestamp()

            message.channel.send(embed);
        }

    exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [``],
  permLevel: 0
};

exports.help = {
  name: 'sıralama',
  description: 'sıralama',
  usage: 'sıralama'
};
