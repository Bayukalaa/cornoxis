const Discord = require("discord.js");
const fs = require("fs");
const data = require("quick.db");
var ayarlar = require('../carnoxisconfig.json');

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
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  const db = require("quick.db");

  if (args[0] === "kapat") {
    if (db.has(`sKanal_${message.guild.id}`) === true) {
      db.delete(`sKanal_${message.guild.id}`);

      if (db.has(`sayac_${message.guild.id}`) === true) {
        db.delete(`sayac_${message.guild.id}`);
        message.channel.send("Sayaç kanalı ve sayaç başarıyla kaldırıldı");
        return;
      }

      message.channel.send("Sayaç kanalı kaldırıldı.");
      return;
    }
    message.channel.send(`Sayaç kanalı ayarlanmamış.`);
    return;
  }

  let channel = message.mentions.channels.first() || message.guild.channels.find(c => c.name === args.slice(0).join(" "));
  let prefix = ayarlar.prefix;

  if (!channel) {
    return message.reply("Lütfen ayarlamak istediğiniz kanalı etiketleyin");
  }


  db.set(`sKanal_${message.guild.id}`, channel.id);

  const embed = new Discord.MessageEmbed()
    .setDescription(`Sayaç kanalı başarıyla ayarlandı: ${channel}\nSayaç kanalını kapatmak isterseniz **${prefix}sayaçkanal kapat** yazmanız yeterlidir.`
    )
    .setColor("RANDOM")
    .setTimestamp()
  message.channel.send(embed);
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
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`You need **Administrator** permission to use this command!`);

  const db = require("quick.db");

  if (args[0] === "close") {
    if (db.has(`sKanal_${message.guild.id}`) === true) {
      db.delete(`sKanal_${message.guild.id}`);

      if (db.has(`sayac_${message.guild.id}`) === true) {
        db.delete(`sayac_${message.guild.id}`);
        message.channel.send("Counter channel and counter removed successfully");
        return;
      }

      message.channel.send("Counter channel removed.");
      return;
    }
    message.channel.send(`Counter channel not set.`);
    return;
  }

  let channel = message.mentions.channels.first() || message.guild.channels.find(c => c.name === args.slice(0).join(" "));
  let prefix = ayarlar.prefix;

  if (!channel) {
    return message.reply("Please label the channel you want to tune");
  }


  db.set(`sKanal_${message.guild.id}`, channel.id);

  const embed = new Discord.MessageEmbed()
    .setDescription(`Counter channel set successfully: ${channel}\nIf you want to close the counter channel, simply type **${prefix}counter-channel close**.`
    )
    .setColor("RANDOM")
    .setTimestamp()
  message.channel.send(embed);  
  }
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sayaç-kanal-belirle", "sayaçkanal", "counter-channel-set"],
  permLevel: 0
};

exports.help = {
  name: "sayaç-kanal-ayarla",
  description: "Sayaç kanalını ayarlar.",
  usage: "sayaç-kanal-ayarla <#kanal>"
};