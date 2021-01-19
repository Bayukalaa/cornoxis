const Discord = require(`discord.js`)
const db = require(`quick.db`)

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
  
  let user = message.mentions.users.first() || message.author
  if(user){
    
const embed = new Discord.MessageEmbed()
//.setAuthor(`${user.tag} adlı kullanıcının avatarı:`)
 .setDescription(`${message.author.tag} adlı kullanıcının avatarı:`)
.setImage(user.displayAvatarURL({dynamic:true})) 
.setTimestamp()
.setColor(`BLUE`)
.setFooter(`Carnoxis`)
message.channel.send(embed)
 } else {
  const embed = new Discord.MessageEmbed()
//.setAuthor(`${message.author.tag} adlı kullanıcının avatarı:`)
  .setDescription(`${message.author.tag} adlı kullanıcının avatarı:`)
.setImage(message.author.avatarURL({dynamic:true}))
.setTimestamp()
  .setColor(`BLUE`)
.setFooter(`Carnoxis`)
message.channel.send(embed)
 }
    }
if(dil === 'en') {
  
  let user = message.mentions.users.first() || message.author
  if(user){
    
const embed = new Discord.MessageEmbed()
//.setAuthor(`${user.tag} adlı kullanıcının avatarı:`)
 .setDescription(`${message.author.tag}'s avatar':`)
.setImage(user.displayAvatarURL({dynamic:true})) 
.setTimestamp()
.setColor(`BLUE`)
.setFooter(`Carnoxis`)
message.channel.send(embed)
 } else {
  const embed = new Discord.MessageEmbed()
//.setAuthor(`${message.author.tag} adlı kullanıcının avatarı:`)
  .setDescription(`${message.author.tag}'s avatar:`)
.setImage(message.author.avatarURL({dynamic:true}))
.setTimestamp()
  .setColor(`BLUE`)
.setFooter(`Carnoxis`)
message.channel.send(embed)
 }
}
    };

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["avatar","avatarım"],
    permLevel: 0
}

exports.help = {
    name: 'pp',

}