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
 .setAuthor(`${client.user.username} | Kullanıcı Yardım Menüsü`)
 .setDescription(`
<a:tickblack:793899913247326208>  **${WestraPrefix}davet** \n-> Botu davet edersiniz.
<a:tickblack:793899913247326208>  **${WestraPrefix}shardbilgi** \n-> Botun shard bilgilerini gösterir.
<a:tickblack:793899913247326208>  **${WestraPrefix}pp** \n-> Etiketlediğiniz kişinin avatarını gösterir.
<a:tickblack:793899913247326208>  **${WestraPrefix}öneri** \n-> Bota öneri belirtirsiniz.
<a:tickblack:793899913247326208>  **${WestraPrefix}bug-bildir** \n-> Bulduğunuz bugu gönderirsiniz.
<a:tickblack:793899913247326208>  **${WestraPrefix}istatistik** \n-> Botun istatistiğini gösterir.
<a:tickblack:793899913247326208>  **${WestraPrefix}kod-çevir** \n-> v11 Kodları v12 Ye Çevirir.
<a:tickblack:793899913247326208>  **${WestraPrefix}çevrilenkod** \n-> Şimdiye Kadar Çevrilen Komutları Görürsünüz.
<a:tickblack:793899913247326208>  **${WestraPrefix}mcskin** \n-> Minecraft Skini Atar.
<a:tickblack:793899913247326208>  **${WestraPrefix}ping** \n-> Botun pingini atar.
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
 .setAuthor(`${client.user.username} | User help menu`)
 .setDescription(`
<a:tickblack:793899913247326208>  **${WestraPrefix}invite** \n-> You invite the bot.
<a:tickblack:793899913247326208>  **${WestraPrefix}pp** \n-> Shows the avatar of the person you tagged.
<a:tickblack:793899913247326208>  **${WestraPrefix}statistics** \n-> Shows the bot's statistics.
<a:tickblack:793899913247326208>  **${WestraPrefix}dial-code** \n-> Converts v11 Codes to v12.
<a:tickblack:793899913247326208>  **${WestraPrefix}translated-code** \n-> You will see the commands translated so far.
<a:tickblack:793899913247326208>  **${WestraPrefix}mcskin** \n-> Minecraft beats skin.
<a:tickblack:793899913247326208>  **${WestraPrefix}ping** \n-> Throws the bot's ping.
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
  aliases: ['member'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};