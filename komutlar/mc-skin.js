const Discord = require('discord.js');
const db = require('quick.db');
const Spectrum = new Set();
exports.run = async (client, message, args) => {
    let dil = await db.get(`language_${message.guild.id}`)
  if(dil === 'tr') {
  if (Spectrum.has(message.author.id)) {
           return message.channel.send("`5` Saniyede da Bir Kullanabilirsiniz - " + `<@${message.author.id}>`);
    } else {
        Spectrum.add(message.author.id);
        setTimeout(() => {
        message.delete();
          Spectrum.delete(message.author.id);
        }, 5000);// milisaniye cinsinden
    } 
  
 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.channel.send('skin adı gir')
 if (mesaj == member) {
   message.channel.send('skin adı belirt')
 } else {
 const mcbody = new Discord.MessageEmbed()
   .setColor('BLUE')
   .setImage(body)

 message.channel.send(mcbody);
 }
}
    if(dil === 'en') { 
   let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.channel.send('enter skin name')
 if (mesaj == member) {
   message.channel.send('specify skin name')
 } else {
 const mcbody = new Discord.MessageEmbed()
   .setColor('BLUE')
   .setImage(body)

 message.channel.send(mcbody);
 }    
}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mccilt"],
  permLevel: 0
};

exports.help = {
  name: "mcskin"
};