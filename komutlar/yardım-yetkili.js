const WestraDiscord = require('discord.js');
const db = require('quick.db');
const WestraClient = new WestraDiscord.Client();
const cryptoconfig = require('../carnoxisconfig.json');
let WestraPrefix = cryptoconfig.prefix
let WestraGif = `https://cdn.discordapp.com/attachments/787726366019420210/793895388624977926/standard_5.gif`

const Spectrum = new Set();
exports.run = async(client, message, args, member) => {
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
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Yetkili Yardım Menüsü`)
 .setDescription(`
<a:tickblack:793899913247326208>  **${WestraPrefix}sil** \n-> Belirtilen sayı kadar mesaj siler.
<a:tickblack:793899913247326208>  **${WestraPrefix}otorol** \n-> Otorol ayarlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}sayaç-kanal-ayarla** \n-> Sayaç Kanal ayarlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}sayaç** \n-> Sayaç Sayısı Ayarlar.
<a:tickblack:793899913247326208>  **${WestraPrefix}dil** \n-> Dil Değiştir (tr/en).
`)
 .setFooter(`Carnoxis`)
 .setTimestamp()
 .setImage(WestraGif)
 message.channel.send(WestraEmbed)
}
if(dil === 'en') {
   if (Spectrum.has(message.author.id)) {
           return message.channel.send("You Can Use It Every `5` Seconds - " + `<@${message.author.id}>`);
    } else {
        Spectrum.add(message.author.id);
        setTimeout(() => {
        message.delete();
          Spectrum.delete(message.author.id);
        }, 5000);// milisaniye cinsinden
    } 
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Authorized help menu`)
 .setDescription(`
<a:tickblack:793899913247326208>  **${WestraPrefix}clear** \n-> Deletes the specified number of messages.
<a:tickblack:793899913247326208>  **${WestraPrefix}autorole** \n-> Autorol settings.
<a:tickblack:793899913247326208>  **${WestraPrefix}lang** \n-> Changes language (tr/en).
<a:tickblack:793899913247326208>  **${WestraPrefix}counter-channel-set** \n-> Adjusts the Counter Channel.
<a:tickblack:793899913247326208>  **${WestraPrefix}counter** \n-> Sets the number of meters.
`)
 .setFooter(`Carnoxis`)
 .setTimestamp()
 .setImage()
 message.channel.send(WestraEmbed) 
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['authorized'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};