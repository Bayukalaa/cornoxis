const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
    let dil = await data.get(`language_${message.guild.id}`)
    if(dil === 'tr') {  
  const nn = new Discord.MessageEmbed().setThumbnail();
  if(message.author.id !== message.guild.owner.user.id) return message.reply('<a:twitchbit:793899916614828062> Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!')
const sistem = await data.fetch(`spam.${message.guild.id}`);
if(!sistem) return message.channel.send(nn.setDescription(`<a:twitchbit:793899916614828062> Spam koruma zaten aktif değil.`)).then(a => a.delete({timeout: 10000}));

data.delete(`spam.${message.guild.id}`);
return message.channel.send(nn.setTitle(`İşlem başarılı!`).setColor(0x36393F).setDescription(`<a:twitchbit:793899916614828062> Spam koruma başarıyla kapatıldı.`)).then(a => a.delete({timeout: 10000}));
    }
    if(dil === 'en') {
    const nn = new Discord.MessageEmbed().setThumbnail();
  if(message.author.id !== message.guild.owner.user.id) return message.reply('<a:twitchbit:793899916614828062> You must be **Server Owner** to use this command!')
const sistem = await data.fetch(`spam.${message.guild.id}`);
if(!sistem) return message.channel.send(nn.setDescription(`<a:twitchbit:793899916614828062> Spam protection is not already active.`)).then(a => a.delete({timeout: 10000}));

data.delete(`spam.${message.guild.id}`);
return message.channel.send(nn.setTitle(`The transaction is successful!`).setColor(0x36393F).setDescription(`<a:twitchbit:793899916614828062> Spam protection has been turned off successfully.`)).then(a => a.delete({timeout: 10000}));
   
    }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['spamkapat', 'spam-koruma-kapat', 'spam-korumakapat', 'spam-protection-off'],
  permLevel: 0
}

exports.help = {
  name: 'spam-kapat'
};