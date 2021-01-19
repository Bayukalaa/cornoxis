const Discord = require('discord.js');
const data = require('quick.db');

const Spectrum = new Set();
exports.run = async (client, message, args) => {
    let dil = await data.get(`language_${message.guild.id}`)
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
if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(new Discord.MessageEmbed().setDescription('<a:twitchbit:801155287842947133> Bu komutu kullanabilmek için `Mesajları Yönet` iznine sahip olmalısın.'));
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription('<a:twitchbit:801155287842947133> Silinecek mesaj miktarını girmelisin.'));
if(args[0] > 100) return message.channel.send(new Discord.MessageEmbed().setDescription('<a:twitchbit:801155287842947133> `100` üzeri mesaj miktarını aynı anda silemem.'));
message.channel.bulkDelete(args[0]);
return message.channel.send(new Discord.MessageEmbed().setDescription('<a:twitchbit:801155287842947133> '+`${args[0]}`+' adet mesaj başarıyla silindi.')).then(m => m.delete({timeout: 5000}));
  }
if(dil === 'en') {
if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(new Discord.MessageEmbed().setDescription('<a:twitchbit:801155287842947133> You must have the `Manage Messages` permission to use this command.'));
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription('<a:twitchbit:801155287842947133> You must enter the message to be deleted.'));
if(args[0] > 100) return message.channel.send(new Discord.MessageEmbed().setDescription('<a:twitchbit:801155287842947133> I cannot delete over `100` messages at the same time.'));
message.channel.bulkDelete(args[0]);
return message.channel.send(new Discord.MessageEmbed().setDescription('<a:twitchbit:801155287842947133> '+`${args[0]}`+' number of messages successfully deleted.')).then(m => m.delete({timeout: 5000}));  
  }
  };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["clear"],
  permLevel: 0
}

exports.help = {
  name: 'sil'
};