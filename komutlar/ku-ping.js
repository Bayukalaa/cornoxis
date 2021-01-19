const WestraDiscord =
      require('discord.js');
const WestraClient =
      new WestraDiscord.Client();
const db =
      require('quick.db');
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
const WestraEmbed = new WestraDiscord.MessageEmbed().setColor(0x36393F).setFooter(`Carnoxis`).setTimestamp()
.setDescription(`<a:twitchbit:801155287842947133> Pingim = **${client.ws.ping} ms**`)
message.channel.send(WestraEmbed)
  }
    if(dil === 'en') {  
  const WestraEmbed = new WestraDiscord.MessageEmbed().setColor(0x36393F).setFooter(`Carnoxis`).setTimestamp()
.setDescription(`<a:twitchbit:801155287842947133> My Ping = **${client.ws.ping} ms**`)
message.channel.send(WestraEmbed)    
    }
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};