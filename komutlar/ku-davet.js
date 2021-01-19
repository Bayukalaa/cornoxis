const WestraDiscord = require('discord.js');
const db = require('quick.db');
const WestraClient = new WestraDiscord.Client();
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
  const WestraEmbed = new WestraDiscord.MessageEmbed();
  WestraEmbed.setColor(0x36393F)
//  WestraEmbed.setAuthor(`Crypto'yu davet ederek sunucunu yapılandır!`)
  WestraEmbed.setDescription(`<a:twitchbit:801155287842947133> Carnoxis'yi davet etmek için [buraya](https://discord.com/oauth2/authorize?client_id=781194108885925948&scope=bot&permissions=8) tıkla! \n \n <a:twitchbit:801155287842947133> Carnoxis'in Destek Sunucusu için [buraya](https://discord.gg/aH23r9k7Yc) tıkla \n \n <a:twitchbit:801155287842947133>a:twitchbit:793899916614828062> Carnoxis'in Sitesi için [buraya](http://www.carnoxisbot.tk) tıkla`)
  message.channel.send(WestraEmbed)
}
    if(dil === 'en') { 
   const WestraEmbed = new WestraDiscord.MessageEmbed();
  WestraEmbed.setColor(0x36393F)
//  WestraEmbed.setAuthor(`Crypto'yu davet ederek sunucunu yapılandır!`)
  WestraEmbed.setDescription(`<a:twitchbit:801155287842947133> Click [here](https://discord.com/oauth2/authorize?client_id=781194108885925948&scope=bot&permissions=8) to invite Carnoxis!\n \n <a:twitchbit:801155287842947133> For Carnoxis Support Server click [here](https://discord.gg/aH23r9k7Yc)\n \n <a:twitchbit:801155287842947133> For Carnoxis's Site, click [here](http://www.carnoxisbot.tk)`)
  message.channel.send(WestraEmbed) 
}  
} 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['invite'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
