const discord = require("discord.js")
const db = require("quick.db") 
const TCMB_Doviz = require('tcmb-doviz');
const Doviz = new TCMB_Doviz();
var ekonomi = new db.table('ekonomi')

module.exports.run = async (client, message, args) => {
  
    const euro = await Doviz.getKur("EUR");
    const dolar = await Doviz.getKur("USD");
  
    let s400 = await ekonomi.fetch(`s400_${message.guild.id}_${message.author.id}`)  
    if(s400 === null) s400 = "0"
    let ölübalina = await ekonomi.fetch(`ölübalina_${message.guild.id}_${message.author.id}`)
    if(ölübalina === null) ölübalina = "0"
    let savaşuçağı = await ekonomi.fetch(`savaşuçağı_${message.guild.id}_${message.author.id}`)
    if(savaşuçağı === null) savaşuçağı = "0"
    let avro = ekonomi.fetch(`avro_${message.guild.id}_${message.author.id}`);
    if(avro === null) avro = "0"
    let dölar = ekonomi.fetch(`dölar_${message.guild.id}_${message.author.id}`);
    if(dölar === null) dölar = "0"
    const meslek = await ekonomi.fetch(`meslek_${message.guild.id}_${message.author.id}`)
    const envanter = new discord.MessageEmbed()
    .setTitle("Envanter")
    .addField("Cephanelik", `**S400** = ${s400} \n**Ölü Balina** = ${ölübalina} \n**Savaş Uçağı** = ${savaşuçağı}`, true)
    .addField("Döviz", `**${dolar.isim}** = ${dölar} \n**${euro.isim}** = ${avro}`, true)
    .addField("Meslek", `**${meslek}**`, false)
    .setColor("RANDOM")

    message.channel.send(envanter)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['envanter','env'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'envanter',
    description: 'envanter',
    usage: 'envanter'
  };