const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
const Spectrum = new Set();
exports.run = async(client, message, args, member, msg) => {
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
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Carnoxis Yardım Menüsü`, client.user.avatarURL())
  .setColor("0x36393F")
  .setThumbnail(client.user.avatarURL())
  .setDescription(`•  Prefixim: **c?**\n • Dilim: **TR** :flag_tr:\n • Üyelik durumu: ${db.has(`üyelikk_${message.author.id}`, "üyelik") ? `**Gold üye!**` : `**Normal üye!**`}`)
  .addField(" • Kategoriler:", `<a:twitchbit:801155287842947133> • [c?kullanıcı](https://discord.gg/aH23r9k7Yc): **Kullanıcı yardım menüsünü gösterir.**\n <a:twitchbit:801155287842947133> • [c?yetkili](https://discord.gg/aH23r9k7Yc): **Yetkili yardım menüsünü gösterir.**\n <a:twitchbit:801155287842947133> • [c?korumasistemi](https://discord.gg/aH23r9k7Yc): **Koruma Sistemini Atar.**`)
  .addField(" • Güncelleme Notları:", "**Güncelleme v1.0:** Dil sistemi eklendi c?dil!")
  //.addField("• Sponsor:", `• Bize sponsor olan **Önem Bilişim**'e teşekkür ederiz! [Sunucu](https://discord.gg/FNnUg6z) • [Site](https://www.onembilisim.com/)`)
  .addField(" • Linkler:", "• [Davet Et](https://discord.com/oauth2/authorize?client_id=793883542782214174&scope=bot&permissions=8) • [Destek Sunucusu](https://discord.gg/aH23r9k7Yc) •")
  .setImage("https://cdn.discordapp.com/attachments/787726366019420210/793895388624977926/standard_5.gif")
.setFooter("Carnoxis", message.author.avatarURL())
.setTimestamp()
  message.channel.send(yardım)
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
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Carnoxis Help Menu`, client.user.avatarURL())
  .setColor("0x36393F")
  .setThumbnail(client.user.avatarURL())
  .setDescription(`•  My Prefix: **c?**\n • My Language: **EN** :flag_us:\n • Membership Status: ${db.has(`üyelikk_${message.author.id}`, "üyelik") ? `**Gold member!**` : `**Normal member!**`}`)
  .addField(" • Categories:", `<a:twitchbit:801155287842947133> • [c?member](https://discord.gg/aH23r9k7Yc): **The user shows the help menu.**\n <a:twitchbit:801155287842947133> • [c?authorized](https://discord.gg/aH23r9k7Yc): **Shows the authorized help menu.**\n <a:twitchbit:801155287842947133> • [c?guardsystem](https://discord.gg/aH23r9k7Yc): **Throws Guard System.**`)
  .addField(" • Updates:", "**Update v1.0:** Language system added c?lang!")
  //.addField("• Sponsor:", `• Bize sponsor olan **Önem Bilişim**'e teşekkür ederiz! [Sunucu](https://discord.gg/FNnUg6z) • [Site](https://www.onembilisim.com/)`)
  .addField(" • Links:", "• [İnvite Me](https://discord.com/oauth2/authorize?client_id=793883542782214174&scope=bot&permissions=8) • [Support Server](https://discord.gg/dn7J8vDJ3V) •")
  .setImage("https://cdn.discordapp.com/attachments/787726366019420210/793895388624977926/standard_5.gif")
.setFooter("Carnoxis", message.author.avatarURL())
.setTimestamp()
  message.channel.send(yardım)     
      }
}  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "westra",
    usage: "westra"
}