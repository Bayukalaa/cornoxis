const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../carnoxisconfig.json')

const Spectrum = new Set();
exports.run = async (client, message, args) => {
  if (Spectrum.has(message.author.id)) {
           return message.channel.send("`5` Saniyede da Bir Kullanabilirsiniz - " + `<@${message.author.id}>`);
    } else {
        Spectrum.add(message.author.id);
        setTimeout(() => {
        message.delete();
          Spectrum.delete(message.author.id);
        }, 5000);// milisaniye cinsinden
    } 
      let dil = await db.get(`language_${message.guild.id}`)
  if(dil === 'tr') {
let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()

if(!rol) return message.channel.send('Lütfen Bir Rol Etiketle. Örnek Kullanım : ``otorol @rol #kanal``')
if(!kanal) return message.channel.send('Lütfen Bir Kanal Etiketle. Örnek Kullanım : ``otorol @rol #kanal``')
  
db.set(`otorolrol_${message.guild.id}`, rol.id)
db.set(`otorolkanal_${message.guild.id}` ,kanal.id)
  
const embed = new Discord.MessageEmbed()

.setTitle('Carnoxis - Otorol')

.setColor("GREEN")

.setDescription(`Otorol Rolü **@${rol.name}** Olarak, Bildirimin Gideceği Kanal İse **#${kanal.name}** Olarak Ayarlandı. \n \nn **Not: Botun Rolü En Üstte Olmaz İse Rol Vermez.**`)

message.channel.send(embed)
  }
    if(dil === 'en') {
let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()

if(!rol) return message.channel.send('Please Tag a Role. Example Usage: ``autorole @role #channel``')
if(!kanal) return message.channel.send('Please Tag a Channel. Example Usage : ``autorole @role #channel``')
  
db.set(`otorolrol_${message.guild.id}`, rol.id)
db.set(`otorolkanal_${message.guild.id}` ,kanal.id)
  
const embed = new Discord.MessageEmbed()

.setTitle('Carnoxis - AutoRole')

.setColor("GREEN")

.setDescription(`Autorol Role **@${rol.name}** As, If the Channel the Notification Goes to Is Set to ** #${kanal.name} **. \n \nn **Note: If The Role Of The Bot Is Not At The Top, It Will Not Role.**`)

message.channel.send(embed)      
    }
  };
    
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['autorole'],
 permLevel: 0
};
exports.help = {
 name: 'otorol',
};