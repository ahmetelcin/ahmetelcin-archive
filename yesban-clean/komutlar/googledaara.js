const Discord = require('discord.js');
const request = require('node-superfetch');
const { search } = require('snekfetch');

exports.run = async (client, message, args) => {

    let googleKey = "AIzaSyCq7Jw66nNYExkvRjI-H-Am4JUOg8b8CXw";
    let csx = "e443f8f0f75230547";
    let query = args.join(" ");
    let result;

    if (!query) return message.channel.send("**Lütfen Googleda Aratacağım Şeyi Yaz.**");
    let href = await search(query);
    if (!href) return message.channel.send("**Bilinmeyen Arama.**")

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setTitle(href.title)
    .setDescription(href.snippet)
    .setImage(href.pagemap ? href.pagemap.cse_thumbnail[0].src : null)
    .setURL(href.link)
  message.channel.send(embed)

    async function search(query) {
        const { body } = await request.get("https://www.googleapis.com/customsearch/v1").query({
            key: googleKey, cx: csx, safe: "off", q: query
        });

        if (!body.items) return null;
        return body.items[0];
            
    };
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'googledaara',
  description: "googleda arama yapmanızı sağlar.",
  usage: 'googledaara <Yazı>'
}