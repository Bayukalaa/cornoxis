const Discord = require("discord.js");
const db = require('quick.db')
exports.run = async(client, message, args, member) => {
      let dil = await db.get(`language_${message.guild.id}`)
  if(dil === 'tr') {  
  let çevrilenkod = db.get(`çevrilenkod`);
const embed = new Discord.MessageEmbed()
  .setColor("0x36393F")
  .setDescription(`<a:ayar:776353886574477342> \n Toplam Çevrilenrilen Kod: ${çevrilenkod}`)
.setImage("https://cdn.discordapp.com/attachments/787726366019420210/793895388624977926/standard_5.gif")
  message.channel.send(embed)
}
   if(dil === 'en') {
   let çevrilenkod = db.get(`çevrilenkod`);
const embed = new Discord.MessageEmbed()
  .setColor("0x36393F")
  .setDescription(`<a:ayar:776353886574477342> \n Total Translated Code: $ {çevrilenkod}`)
  message.channel.send(embed)  
   }
}  

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ksay", "translated-code"],
    permLevel: 0
}

exports.help = {
    name: "çevrilenkod",
    description: "kodçevirme",
    usage: "kodçevirme"
}
