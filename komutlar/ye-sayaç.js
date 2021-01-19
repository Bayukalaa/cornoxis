const Discord = require("discord.js");
const data = require("quick.db");
const fs = require("fs");
const ayarlar = require("../carnoxisconfig.json");

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
  const db = require("quick.db");

  let prefix = ayarlar.prefix;
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  if (!args[0]) {
    return message.reply("Lütfen ayarlamak istediğiniz sayıyı yazınız");
  }

  if (args[0] === "kapat") {
    if (db.has(`sayac_${message.guild.id}`) === true) {
      db.delete(`sayac_${message.guild.id}`);

      if (db.has(`sKanal_${message.guild.id}`) === true) {
        db.delete(`sKanal_${message.guild.id}`);
        message.channel.send("Sayaç kanalı ve sayaç başarıyla kaldırıldı");
        return;
      }

      message.channel.send("Sayaç kaldırıldı.");
      return;
    }
    message.channel.send(`Sayaç ayarlanmamış.`);
    return;
  }

  if (isNaN(args[0])) {
    return message.reply("Sadece sayı!");
  }

  if (args[0] <= message.guild.memberCount) {
    const embed = new Discord.MessageEmbed();
    return message.reply("Lütfen sunucu sayısından daha yüksek bir değer girin!" );
  }

  db.set(`sayac_${message.guild.id}`, args[0]);

  const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setAuthor(`
Sayaç başarıyla ayarlandı: **${args[0]}**
Sayaç kapatmak isterseniz **c?sayaç kapat** yazmanız yeterlidir.
Sayaç kanalı için c?sayaç-kanal-ayarla #kanal
`);
  message.channel.send(embed);
  }
  if(dil === 'tr') {
   if (Spectrum.has(message.author.id)) {
           return message.channel.send("You Can Use It Every `5` Seconds - " + `<@${message.author.id}>`);
    } else {
        Spectrum.add(message.author.id);
        setTimeout(() => {
        message.delete();
          Spectrum.delete(message.author.id);
        }, 5000);// milisaniye cinsinden
    } 
  const db = require("quick.db");

  let prefix = ayarlar.prefix;
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`You need **Administrator** permission to use this command!`);

  if (!args[0]) {
    return message.reply("Please write the number you want to set");
  }

  if (args[0] === "close") {
    if (db.has(`sayac_${message.guild.id}`) === true) {
      db.delete(`sayac_${message.guild.id}`);

      if (db.has(`sKanal_${message.guild.id}`) === true) {
        db.delete(`sKanal_${message.guild.id}`);
        message.channel.send("Counter channel and counter removed successfully");
        return;
      }

      message.channel.send("Counter removed.");
      return;
    }
    message.channel.send(`Counter not set.`);
    return;
  }

  if (isNaN(args[0])) {
    return message.reply("Only number!");
  }

  if (args[0] <= message.guild.memberCount) {
    const embed = new Discord.MessageEmbed();
    return message.reply("Please enter a value higher than the number of servers!" );
  }

  db.set(`sayac_${message.guild.id}`, args[0]);

  const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setAuthor(`
The counter has been set successfully: **${args[0]}**
If you want to turn off the counter, simply write the **c?counter close**.
c?counter-channel-set #channel for counter channel
`);
  message.channel.send(embed);    
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sayacayarla", "sayac", "sayaç", "counter"],
  permLevel: 0
};

exports.help = {
  name: "sayaç-ayarla",
  description: "Sayacı ayarlar.",
  usage: "saya-çayarla "
};